import Button from "components/Button";
import { useNavigate } from "react-router-dom";

import { useSelector } from "store";
import { getFormNames } from "store/slice";

const Main = () => {
  const navigate = useNavigate();
  const forms = useSelector((state) => getFormNames(state));

  const handleNavigation = (form: string) => {
    navigate("/form", {
      state: {
        formName: form,
      },
    });
  };

  return (
    <div>
      <h1>Main</h1>
      {forms.map((form, index) => (
        <Button
          key={index}
          color="green"
          value={form}
          onClick={() => handleNavigation(form)}
        />
      ))}
    </div>
  );
};

export default Main;
