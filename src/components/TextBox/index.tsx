import { Fragment } from "react";

import { FormElement } from "interfaces/form-model";
import ComponentMaker from "components/ComponentMaker";

const TextBox = (props: FormElement) => {
  const { name, defaultValue, style, children, placeholder, required } = props;

  return (
    <Fragment>
      <input
        type="text"
        name={name}
        style={style}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
      />
      {children.length > 0 &&
        children.map((child, index) => (
          <ComponentMaker key={index} {...child} />
        ))}
    </Fragment>
  );
};

export default TextBox;
