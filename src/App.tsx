import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "store";
import MainRoutes from "routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
