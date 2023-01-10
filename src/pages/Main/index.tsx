import { useNavigate } from "react-router-dom";

import DataLoader from "components/DataLoader";

const Main = () => {
  const navigate = useNavigate();

  const handleNavigation = (form: string) => {
    navigate("/form", {
      state: {
        formName: form,
      },
    });
  };

  return (
    <div>
      <DataLoader />
      <h1>Main</h1>
      <button onClick={() => handleNavigation("form_1")}>HTML Form</button>
      <button onClick={() => handleNavigation("form_1")}>
        React Hook Form
      </button>
    </div>
  );
};

export default Main;
