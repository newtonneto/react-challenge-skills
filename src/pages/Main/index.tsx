import { useNavigate } from "react-router-dom";

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
      <h1>Main</h1>
      <button onClick={() => handleNavigation("form_1")}>HTML Form</button>
      <button onClick={() => handleNavigation("form_1")}>
        React Hook Form
      </button>
    </div>
  );
};

export default Main;
