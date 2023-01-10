import DataLoader from "components/DataLoader";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "store";
import { getFormByName } from "store/slice";

import ComponentMaker from "../../components/ComponentMaker";

const WorkspaceComponent = () => {
  const { state } = useLocation();
  const { formName } = state;
  const form = useSelector((state) => getFormByName(state, formName));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("e: ", e);
  };

  return (
    <Fragment>
      {!form ? (
        <DataLoader />
      ) : (
        <form onSubmit={handleSubmit} style={form.style} name={form.name}>
          <ComponentMaker {...form.root} />

          <input
            type="submit"
            value="Submit"
            style={{ width: 200, height: 40, marginTop: 8, marginLeft: 16 }}
          />
        </form>
      )}
    </Fragment>
  );
};

export default WorkspaceComponent;
