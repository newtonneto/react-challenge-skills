import { Fragment, useEffect } from "react";

import { FormElement } from "interfaces/form-model";
import ComponentMaker from "components/ComponentMaker";
import { useDispatch } from "store";
import { setField } from "store/slice";

const ComboBox = (props: FormElement) => {
  const { name, style, children, options, defaultValue, required, label } =
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

  if (!options) return <Fragment />;

  return (
    <Fragment>
      <label htmlFor={label}>
        {label}
        <select
          name={name}
          aria-label={name}
          style={style}
          defaultValue={defaultValue}
          required={required}
          onChange={(e) => handleFieldUpdate(e.target.value)}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      {children.length > 0 &&
        children.map((child, index) => (
          <ComponentMaker key={index} {...child} />
        ))}
    </Fragment>
  );
};

export default ComboBox;
