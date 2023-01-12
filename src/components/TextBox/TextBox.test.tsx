import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import TextBox from "components/TextBox";

const setup = () => {
  const initialState = { fields: { TextBoxTest: "" } };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  const utils = render(
    <Provider store={store}>
      <TextBox
        name="TextBoxTest"
        defaultValue="Default"
        style={{ width: "100%" }}
        children={[]}
        placeholder="Text Box Test"
        required={true}
        label="Text Box Test"
        type="text"
      />
    </Provider>
  );
  const input = utils.getByLabelText("TextBoxTest");
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

  expect(castedInput.value).toBe("Default");
});

test("Test change value", () => {
  const { input, store } = setup();
  const castedInput = input as HTMLInputElement;

  const actions = store.getActions();
  const initPayload = {
    payload: {
      name: "TextBoxTest",
      value: "Default",
    },
    type: "forms/setField",
  };
  const changePayload = {
    payload: {
      name: "TextBoxTest",
      value: "new value",
    },
    type: "forms/setField",
  };

  expect(actions).toEqual([initPayload]);
  fireEvent.change(castedInput, { target: { value: "new value" } });

  expect(castedInput.value).toBe("new value");
  expect(actions).toEqual([initPayload, changePayload]);
});
