import loader, { Monaco } from "@monaco-editor/loader";
import { editor } from "monaco-editor";
import { ref, Ref, shallowRef, watch } from "vue";

let monaco: Monaco | null = null;

export async function useMonaco() {
  // https://github.com/microsoft/monaco-editor/issues/2147#issuecomment-696750840
  /*monaco.languages.typescript.javascriptDefaults.addExtraLib(
          "declare let testVar = 3, o = 3;",
          "yourlibname.d.ts"
        );*/

  if (monaco == null) {
    loader.config({
      paths: {
        // @ts-ignore
        vs: import.meta.env.BASE_URL + "node_modules/monaco-editor/min/vs",
      },
    });

    monaco = await loader.init().then((value) => {
      value.languages.typescript.javascriptDefaults.setWorkerOptions({
        // @ts-ignore
        customWorkerPath: import.meta.env.BASE_URL + "/monaco-custom-worker.js",
      });
      return value;
    });
  }

  function createEditor(
    element: Ref<HTMLElement | undefined>,
    options: editor.IStandaloneEditorConstructionOptions
  ) {
    const editor = shallowRef<editor.IStandaloneCodeEditor>();
    const code = ref("");

    watch(
      element,
      (value, oldValue) => {
        if (oldValue) {
          editor.value?.dispose();
          editor.value = undefined;
        }

        if (!value || !monaco) return;

        editor.value = monaco.editor.create(value, options);
        code.value = options.value ?? "";

        editor.value.onDidChangeModelContent((e) => {
          code.value = editor.value?.getValue() ?? "";
        });
      },
      { immediate: true }
    );

    async function getVariableNames(): Promise<string[]> {
      // TODO: Wait until editor is initialized
      const model = editor.value?.getModel();
      if (!model || !monaco) return [];
      const worker = await monaco.languages.typescript.getJavaScriptWorker();
      const thisWorker = await worker(model.uri);
      // @ts-ignore
      const variableNames = await thisWorker.getVariables(model.uri.toString());

      return variableNames;
    }

    return {
      code,
      getVariableNames,
    };
  }
  return {
    createEditor,
  };
}
