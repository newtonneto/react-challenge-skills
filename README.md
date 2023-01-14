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

- name: a string that identifies the form;
- root: the first component, at the top level of the structure;
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

- name: a string that identifies the component;
- label: a string to identifies the component visually;
- placeholder: optional property to explain the field;
- required: define if that input is mandatory or not for submit;
- type: defines what component will be rendered;
- style: style object with properties to customize the component;
- defaultValue: the first value of the input;
- children: an array of FormElements;
- options: optional property that contains a string array to create the select input options.

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

  Handle form initial values and form submit, calls ComponentMaker to create the entire form from the JSON's root property. Contains a reference to DataLoader, to deal with cases where the user refreshes the page and redux loses the states in store.

- DataLoader [src/components]

  Simulate an api call to get all the forms and save them in Redux Store States.

- ComponentMaker [src/components]

  Has the logic to build the components defined on JSON selected form. The ComponentMaker build one component at, if the builded component has children components he will call the ComponentMaker to build his children, and so on.

- Store [src/store/]

  Resposible for store all the forms on JSON format and all field's values of selected form. The store slice has functions to retrieve the forms or fields by your names and to get all forms or fields in one object. functions to get individual elements is useful to render the selected form and to update only the updated field on input vlaue changes cases.
