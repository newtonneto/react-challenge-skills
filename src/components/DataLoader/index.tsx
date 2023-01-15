import { Fragment, useEffect } from "react";

import { getAll } from "data/api";
import { useDispatch } from "store";
import { addForm } from "store/slice";

const DataLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const forms = getAll();

    forms.forEach((form) => {
      dispatch(addForm(form));
    });
  }, [dispatch]);

  return <Fragment />;
};

export default DataLoader;
