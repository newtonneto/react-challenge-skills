import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import ComboBox from "components/ComboBox";
import { ElementProperties } from "interfaces/form-model";

const setup = () => {
  const initialState = { fields: { TextBoxTest: "", ChildBox: "" } };
  const mockStore = configureStore();
  let store = mockStore(initialState);
  const properties: ElementProperties = {
    defaultValue: "Option 1",
    style: { width: "100%" },
    required: true,
  };

  const utils = render(
    <Provider store={store}>
      <ComboBox
        name="ComboBoxTest"
        label="Combo Box Test"
        type="select"
        options={["Option 1", "Option 2"]}
        properties={properties}
        children={[
          {
            name: "ChildBox",
            label: "Steam Profile",
            type: "text",
            properties: {
              style: {
                width: 400,
                margin: 16,
                borderRadius: 4,
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 16,
                paddingRight: 16,
                borderColor: "red",
                borderWidth: 5,
              },
              defaultValue: "",
              placeholder: "Enter your Steam Profile",
              required: true,
            },
            children: [],
          },
        ]}
      />
    </Provider>
  );
  const input = utils.getByLabelText("ComboBoxTest");
  const child = utils.getByLabelText("ChildBox");

  return {
    input,
    child,
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

test("Render child", () => {
  const { child } = setup();
  const castedInput = child as HTMLInputElement;

  expect(castedInput).toBeInTheDocument();
});
