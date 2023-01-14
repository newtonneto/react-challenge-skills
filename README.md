<h1 align="center">Skills Workflow - React Challenge</h1>

# Running the application

Runs the app in the development mode:

```sh
  npm start
```

Launches the test runner in the interactive watch mode:

```sh
  npm test
```

Launches the test runner with coverage:

```sh
  npm run test:coverage
```

# About JSON structure

The JSON struture is divided in three parts, the main level, the components definition and style properties.

## Main Level:

```sh
  {
    name: string;
    root: FormElement;
    style: ElementStyle;
  }
```

- name: a string that identify the form;
- root: the firts component, at the top level of structure;
- style: style object with properties to customize the form.

## FormElement:

```sh
  {
    name: string;
    label: string;
    placeholder?: string;
    required: boolean;
    type: "text" | "select";
    style: ElementStyle;
    defaultValue: string | number;
    children: FormElement[];
    options?: string[];
  }
```

- name: a string that identify the component;
- label: a string for identify the component visually;
- placeholder: optional property to explain the field;
- required: define if that input is mandatory or not for submit;
- type: used to decide what component will be rendered;
- style: style object with properties to customize the component;
- defaultValue: the first value of the input;
- children: an array of FormElements;
- options: optional property that contains a string array for create the select input options.

## ElementStyle

```sh
  {
    width?: string | number;
    height?: number;
    marginTop?: number;
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    margin?: number;
    padding?: number;
    flex?: number;
    display?: "flex" | "block";
    flexDirection?: "row" | "column";
  }
```

A group of html style elements to customize the form or a component

# About the system architecture
