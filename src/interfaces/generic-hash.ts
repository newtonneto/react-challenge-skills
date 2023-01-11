import { FormModel } from "interfaces/form-model";

export interface IStoreForm {
  [key: string]: FormModel;
}

export interface IStoreFields {
  [key: string]: string | number;
}
