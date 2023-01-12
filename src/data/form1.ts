import { FormModel } from "interfaces/form-model";

export const FormExample1: FormModel = {
  name: "form_1",
  style: {
    display: "flex",
    flexDirection: "column",
  },
  root: {
    name: "text_1",
    label: "Name",
    type: "text",
    style: {
      width: 400,
      margin: 16,
      borderRadius: 4,
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 16,
      paddingRight: 16,
      borderWidth: 0.5,
    },
    defaultValue: "Newton Neto",
    placeholder: "Enter your name",
    required: true,
    children: [
      {
        name: "select_1",
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
      {
        name: "text_2",
        label: "Age",
        type: "text",
        style: {
          width: 400,
          margin: 16,
          borderRadius: 4,
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16,
          paddingRight: 16,
        },
        defaultValue: 0,
        placeholder: "Enter your age",
        children: [
          {
            name: "text_3",
            label: "Steam Profile",
            type: "text",
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
            children: [],
            required: true,
          },
          {
            name: "text_4",
            label: "PSN Profile",
            type: "text",
            style: {
              width: 400,
              margin: 16,
              borderRadius: 4,
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 16,
              paddingRight: 16,
              borderColor: "blue",
              borderWidth: 10,
            },
            defaultValue: "",
            placeholder: "Enter your PSN Profile",
            children: [],
            required: true,
          },
        ],
        required: true,
      },
    ],
  },
};
