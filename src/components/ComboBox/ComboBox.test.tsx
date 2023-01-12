import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import ComboBox from "components/ComboBox";

const setup = () => {
  const initialState = { fields: { TextBoxTest: "" } };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  const utils = render(
    <Provider store={store}>
      <ComboBox
        name="ComboBoxTest"
        defaultValue="Option 1"
        style={{ width: "100%" }}
        children={[]}
        required={true}
        label="Combo Box Test"
        type="select"
        options={["Option 1", "Option 2"]}
      />
    </Provider>
  );
  const input = utils.getByLabelText("ComboBoxTest");
  return {
    input,
    store,
    ...utils,
  };
};

test("Component render", () => {
  const { input } = setup();
  const castedInput = input as HTMLInputElement;

  expect(castedInput).toBeInTheDocument();
});

test("Default value", () => {
  const { input } = setup();
  const castedInput = input as HTMLInputElement;

  expect(castedInput.value).toBe("Option 1");
});

test("Test change value", () => {
  const { input, store } = setup();
  const castedInput = input as HTMLInputElement;

  const actions = store.getActions();
  const initPayload = {
    payload: {
      name: "ComboBoxTest",
      value: "Option 1",
    },
    type: "forms/setField",
  };
  const changePayload = {
    payload: {
      name: "ComboBoxTest",
      value: "Option 2",
    },
    type: "forms/setField",
  };

  expect(actions).toEqual([initPayload]);
  fireEvent.change(castedInput, { target: { value: "Option 2" } });

  expect(castedInput.value).toBe("Option 2");
  expect(actions).toEqual([initPayload, changePayload]);
});
