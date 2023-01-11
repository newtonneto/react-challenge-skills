import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { FormModel } from "interfaces/form-model";
import { IStoreFields, IStoreForm } from "interfaces/generic-hash";
import { RootState } from "store";

const slice = createSlice({
  name: "forms",
  initialState: { forms: {} as IStoreForm, fields: {} as IStoreFields },
  reducers: {
    addForm(state, action: PayloadAction<FormModel>) {
      state.forms[action.payload.name] = action.payload;
    },
    addFields(state, action: PayloadAction<IStoreFields>) {
      state.fields = action.payload;
    },
    setField(
      state,
      action: PayloadAction<{ name: string; value: string | number }>
    ) {
      state.fields[action.payload.name] = action.payload.value;
    },
  },
});

const selectors = {
  getAllForms: (state: RootState) => {
    return state.forms;
  },
  getFormByName: (state: RootState, name: string) => {
    return state.forms[name];
  },
  getFields: (state: RootState) => {
    return state.fields;
  },
  getField: (state: RootState, name: string) => {
    return state.fields[name];
  },
};

export const { addForm, addFields, setField } = slice.actions;
export const { getAllForms, getFormByName, getFields, getField } = selectors;

export default slice.reducer;
