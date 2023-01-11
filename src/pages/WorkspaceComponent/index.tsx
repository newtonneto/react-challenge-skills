import { Fragment, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cloneDeep from "lodash/cloneDeep";

import DataLoader from "components/DataLoader";
import ComponentMaker from "components/ComponentMaker";
import { useDispatch, useSelector } from "store";
import { addFields, addForm, getFields, getFormByName } from "store/slice";
import { IStoreFields } from "interfaces/generic-hash";
import findFields from "utils/findFields";
import replaceValues from "utils/replaceValues";

const WorkspaceComponent = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { formName } = state;
  const dispatch = useDispatch();
  const form = useSelector((state) => getFormByName(state, formName));
  const values = useSelector((state) => getFields(state));

  const handleFormFields = () => {
    let fields: IStoreFields = {};
    findFields(fields, form.root);
    dispatch(addFields(fields));
  };

  useEffect(() => {
    if (form) {
      handleFormFields();
    }
  }, [form]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let clone = cloneDeep(form);
    replaceValues(values, clone.root);

    dispatch(addForm(clone));
  };

  return (
    <Fragment>
      {!form ? (
        <DataLoader />
      ) : (
        <Fragment>
          <form onSubmit={handleSubmit} style={form.style} name={form.name}>
            <ComponentMaker {...form.root} />

            <input
              type="submit"
              value="Submit"
              style={{ width: 200, height: 40, marginTop: 8, marginLeft: 16 }}
            />
          </form>
          <input
            type="submit"
            value="Voltar"
            style={{ width: 200, height: 40, marginTop: 8, marginLeft: 16 }}
            onClick={() => navigate("/")}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default WorkspaceComponent;
