import { Fragment, useEffect } from "react";

import { FormExample1 } from "data/form1";
import { IHash } from "interfaces/generic-hash";
import { useDispatch } from "store";
import { addForm } from "store/slice";

const FormSelector: IHash = {
  form1: FormExample1,
};

const DataLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addForm(FormSelector.form1));
  }, []);

  return <Fragment />;
};

export default DataLoader;
