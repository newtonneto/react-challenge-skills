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
    root: FormElement[];
    style: ElementStyle;
  }
```

- name: a string that identifies the form;
- root: an array with the first components, at the top level of the JSON's structure;
- style: style object with properties to customize the form.

## FormElement:

```sh
  {
    name: string;
    label: string;
    type: "text" | "select";
    children: FormElement[];
    options?: string[];
    properties: ElementProperties;
    style?: ElementStyle;
  }
```

- name: a string that identifies the component;
- label: a string to identify the component visually;
- type: defines what component will be rendered;
- children: an array of FormElements;
- options: optional property that contains a string array to create the select input options.
- properties: an object with input properties;
- style: style object with properties to customize the component;

## ElementProperties

```sh
  {
    placeholder?: string;
    style: ElementStyle;
    defaultValue: string | number;
    required?: boolean;
  }
```

- placeholder: optional property to explain the field;
- style: style object with properties to customize the input field;
- defaultValue: the first value of the input;
- required: define if that input is mandatory or not for submit;

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

- Main [src/pages]

  List all forms avaiable and handle the navigation for them.

- WorkspaceComponents [src/pages]

  Handle the form's initial values and submit, calls ComponentMaker to create the entire form from the JSON's root property. Contains a reference to DataLoader, to deal with cases where the user refreshes the page and redux loses the states in store.

- DataLoader [src/components]

  Simulate an api call to get all the forms and save them in Redux Store States.

- ComponentMaker [src/components]

  Contains the logic to build the components defined on JSON selected form. The ComponentMaker creates one component at time, if the created component has children components it will call the ComponentMaker to build its children, and so on.

- Store [src/store/]

  It is responsible for storing all the forms on JSON format and all field inputs values of the selected form. The Store's Slice has functions to retrieve the forms or fields by its names and to get all forms or fields in one object. Functions to get individual elements are useful to render the selected form and to update only the updated field on input value changes cases.

- Api [src/data]

  Handles the logic to store and retrieve data from local storage. Local storage simulates an API to provide data to this project's front end.
