export interface FormModel {
  name: string;
  root: FormElement;
  style: ElementStyle;
}

export interface FormElement {
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
