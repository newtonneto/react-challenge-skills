import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import store from "store";
import MainRoutes from "routes";
import DataLoader from "components/DataLoader";
import { initializeFakeApi } from "data/api";

function App() {
  useEffect(() => {
    initializeFakeApi();
  }, []);

  return (
    <Provider store={store}>
      <DataLoader />
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
