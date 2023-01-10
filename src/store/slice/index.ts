import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { FormModel } from "interfaces/form-model";
import { IHash } from "interfaces/generic-hash";
import { RootState } from "store";

const slice = createSlice({
  name: "forms",
  initialState: { forms: {} as IHash },
  reducers: {
    addForm(state, action: PayloadAction<FormModel>) {
      state.forms[action.payload.name] = action.payload;
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
};

export const { addForm } = slice.actions;
export const { getAllForms, getFormByName } = selectors;

export default slice.reducer;
