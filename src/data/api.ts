import { FormModel } from "interfaces/form-model";
import { FormExample1, FormExample2 } from "data/mocks";

export const getByName = (formName: string) => {
  return localStorage.getItem(formName);
};

export const getAll = () => {
  let keys: string[] = [];
  let forms: FormModel[] = [];

  keys = Object.keys(localStorage);
  keys.forEach((key) => {
    const form = localStorage.getItem(key);

    if (form) {
      try {
        forms.push(JSON.parse(form));
      } catch (error) {
        console.error(error);
      }
    }
  });

  return forms;
};

export const postByName = (form: FormModel) => {
  localStorage.setItem(form.name, JSON.stringify(form));
};

export const initializeFakeApi = () => {
  if (!getByName(FormExample1.name)) {
    postByName(FormExample1);
  }
  if (!getByName(FormExample2.name)) {
    postByName(FormExample2);
  }
};
