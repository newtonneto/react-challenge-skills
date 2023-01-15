import { Fragment, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cloneDeep from "lodash/cloneDeep";
import { toast, ToastContainer } from "react-toastify";

import DataLoader from "components/DataLoader";
import ComponentMaker from "components/ComponentMaker";
import { useDispatch, useSelector } from "store";
import { addFields, addForm, getFields, getFormByName } from "store/slice";
import { IStoreFields } from "interfaces/generic-hash";
import findFields from "utils/findFields";
import replaceValues from "utils/replaceValues";
import { postByName } from "data/api";
import Button from "components/Button";

const WorkspaceComponent = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { formName } = state;
  const dispatch = useDispatch();
  const form = useSelector((state) => getFormByName(state, formName));
  const values = useSelector((state) => getFields(state));

  const handleFormFields = useCallback(() => {
    let fields: IStoreFields = {};
    form.root.forEach((input) => {
      findFields(fields, input);
    });
    dispatch(addFields(fields));
  }, [dispatch, form]);

  useEffect(() => {
    if (form) {
      handleFormFields();
    }
  }, [form, handleFormFields]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let clone = cloneDeep(form);
    clone.root.forEach((input) => {
      replaceValues(values, input);
    });

    dispatch(addForm(clone));
    postByName(clone);

    toast.success("Form submitted!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <Fragment>
      <ToastContainer />
      {!form ? (
        <DataLoader />
      ) : (
        <Fragment>
          <form onSubmit={handleSubmit} style={form.style} name={form.name}>
            {form.root.map((input) => (
              <ComponentMaker {...input} />
            ))}

            <div>
              <input
                type="submit"
                value="Submit"
                style={{
                  width: 200,
                  height: 40,
                  marginTop: 8,
                  marginLeft: 16,
                  backgroundColor: "white",
                  borderRadius: 4,
                  borderColor: "green",
                  color: "green",
                }}
              />
              <Button
                value="Voltar"
                color="red"
                onClick={() => navigate("/")}
              />
            </div>
          </form>
        </Fragment>
      )}
    </Fragment>
  );
};

export default WorkspaceComponent;
