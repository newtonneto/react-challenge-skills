import { FormElement } from "interfaces/form-model";
import { IStoreFields } from "interfaces/generic-hash";

const findFields = (fields: IStoreFields, formElement: FormElement): void => {
  Object.entries(formElement).forEach((key) => {
    if (key[0] === "name") {
      fields[key[1]] = "";
    } else if (key[0] === "children" && Array.isArray(key[1])) {
      key[1].forEach((child) => {
        findFields(fields, child);
      });
    }
  });
};

export default findFields;
