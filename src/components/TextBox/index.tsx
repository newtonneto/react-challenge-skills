import { Fragment, useEffect } from "react";

import { FormElement } from "interfaces/form-model";
import ComponentMaker from "components/ComponentMaker";
import { useDispatch } from "store";
import { setField } from "store/slice";

const TextBox = (props: FormElement) => {
  const { name, defaultValue, style, children, placeholder, required, label } =
    props;
  const dispatch = useDispatch();

  const handleFieldUpdate = (value: string | number) => {
    dispatch(setField({ name, value }));
  };

  useEffect(() => {
    if (defaultValue) {
      handleFieldUpdate(defaultValue);
    }
  }, []);

  return (
    <Fragment>
      <label htmlFor={label}>
        {label}
        <input
          type="text"
          name={name}
          aria-label={name}
          style={style}
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
          onChange={(e) => handleFieldUpdate(e.target.value)}
        />
      </label>
      {children.length > 0 &&
        children.map((child, index) => (
          <ComponentMaker key={index} {...child} />
        ))}
    </Fragment>
  );
};

export default TextBox;
