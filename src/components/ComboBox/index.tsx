import { Fragment } from "react";

import { FormElement } from "interfaces/form-model";
import ComponentMaker from "components/ComponentMaker";

const ComboBox = (props: FormElement) => {
  const { name, style, children, options, defaultValue, required } = props;

  if (!options) return <Fragment />;

  return (
    <Fragment>
      <select
        name={name}
        style={style}
        defaultValue={defaultValue}
        required={required}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {children.length > 0 &&
        children.map((child, index) => (
          <ComponentMaker key={index} {...child} />
        ))}
    </Fragment>
  );
};

export default ComboBox;
