import openEditor from "open-in-editor";

type Editor = {
  open: (filepath: string) => Promise<void>;
};

const getEditor: () => Promise<Editor> = () => {
  return new Promise(resolve => {
    const _editor = openEditor.configure({}, err => {
      if (err) {
        resolve(openEditor.configure({ editor: "code" }));
      }
    });
    resolve(_editor);
  });
};

export const openInEditor = async (filepath: string) => {
  (await getEditor()).open(filepath);
};
