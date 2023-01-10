import { Route, Routes } from "react-router-dom";

import Main from "pages/Main";
import WorkspaceComponent from "pages/WorkspaceComponent";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/form" element={<WorkspaceComponent />} />
    </Routes>
  );
};

export default MainRoutes;
