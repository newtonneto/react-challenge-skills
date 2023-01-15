import { Fragment, useEffect, useCallback } from "react";

import { FormElement } from "interfaces/form-model";
import ComponentMaker from "components/ComponentMaker";
import { useDispatch } from "store";
import { setField } from "store/slice";

const ComboBox = (props: FormElement) => {
  const { name, children, options, label, properties, style } = props;
  const dispatch = useDispatch();

  const handleFieldUpdate = useCallback(
    (value: string | number) => {
      dispatch(setField({ name, value }));
    },
    [dispatch, name]
  );

  useEffect(() => {
    if (properties.defaultValue) {
      handleFieldUpdate(properties.defaultValue);
    }
  }, [properties.defaultValue, handleFieldUpdate]);

  if (!options) return <Fragment />;

  return (
    <Fragment>
      <label htmlFor={label} style={style}>
        {label}
        <select
          name={name}
          aria-label={name}
          onChange={(e) => handleFieldUpdate(e.target.value)}
          {...properties}
        >
          <option value="" disabled>
            Choose an option
          </option>
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
