export interface FormModel {
  name: string;
  root: FormElement[];
  style: ElementStyle;
}

export interface FormElement {
  name: string;
  label: string;
  type: "text" | "select";
  children: FormElement[];
  options?: string[];
  properties: ElementProperties;
  style?: ElementStyle;
}

export interface ElementProperties {
  placeholder?: string;
  style: ElementStyle;
  defaultValue: string | number;
  required?: boolean;
}

export interface ElementStyle {
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
