import { createElement, Fragment } from "react";

import { FormElement } from "interfaces/form-model";
import ComboBox from "components/ComboBox";
import TextBox from "components/TextBox";

interface IHash {
  [key: string]: React.FC<FormElement>;
}

const FormInputs: IHash = {
  text: TextBox,
  select: ComboBox,
};

const ComponentMaker = (props: FormElement) => {
  if (!FormInputs[props.type]) return <Fragment />;

  return createElement(FormInputs[props.type], { ...props });
};

export default ComponentMaker;
