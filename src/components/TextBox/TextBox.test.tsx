import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import TextBox from "components/TextBox";

const setup = () => {
  const initialState = { fields: { TextBoxTest: "", ChildBox: "" } };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  const utils = render(
    <Provider store={store}>
      <TextBox
        name="TextBoxTest"
        defaultValue="Default"
        style={{ width: "100%" }}
        children={[
          {
            name: "ChildBox",
            label: "Gender",
            type: "select",
            style: {
              width: 400,
              margin: 16,
              borderRadius: 4,
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 16,
              paddingRight: 16,
            },
            defaultValue: "Male",
            options: ["Female", "Male", "Other"],
            children: [],
            required: true,
          },
        ]}
        placeholder="Text Box Test"
        required={true}
        label="Text Box Test"
        type="text"
      />
    </Provider>
  );
  const input = utils.getByLabelText("TextBoxTest");
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

  expect(castedInput.value).toBe("Default");
});

test("Test change value", () => {
  const { input, store } = setup();
  const castedInput = input as HTMLInputElement;

  const actions = store.getActions();
  const initPayload = [
    {
      payload: {
        name: "ChildBox",
        value: "Male",
      },
      type: "forms/setField",
    },
    {
      payload: {
        name: "TextBoxTest",
        value: "Default",
      },
      type: "forms/setField",
    },
  ];
  const changePayload = {
    payload: {
      name: "TextBoxTest",
      value: "new value",
    },
    type: "forms/setField",
  };

  expect(actions).toEqual(initPayload);
  fireEvent.change(castedInput, { target: { value: "new value" } });

  expect(castedInput.value).toBe("new value");
  expect(actions).toEqual([...initPayload, changePayload]);
});

test("Render child", () => {
  const { child } = setup();
  const castedInput = child as HTMLInputElement;

  expect(castedInput).toBeInTheDocument();
});
