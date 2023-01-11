import { FormElement } from "interfaces/form-model";
import { IStoreFields } from "interfaces/generic-hash";

const replaceValues = (
  fields: IStoreFields,
  formElement: FormElement
): void => {
  if (fields[formElement.name]) {
    formElement.defaultValue = fields[formElement.name];
  }

  if (formElement.children) {
    formElement.children.forEach((child) => {
      replaceValues(fields, child);
    });
  }
};

export default replaceValues;
