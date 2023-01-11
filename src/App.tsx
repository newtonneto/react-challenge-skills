import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "store";
import MainRoutes from "routes";
import DataLoader from "components/DataLoader";

function App() {
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
