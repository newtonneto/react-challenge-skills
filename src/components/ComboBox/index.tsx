import { Fragment, useEffect } from "react";

import { FormElement } from "interfaces/form-model";
import ComponentMaker from "components/ComponentMaker";
import { useDispatch, useSelector } from "store";
import { getField, setField } from "store/slice";

const ComboBox = (props: FormElement) => {
  const { name, style, children, options, defaultValue, required } = props;
  const dispatch = useDispatch();
  const fieldValue = useSelector((store) => getField(store, name));

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
      <select
        name={name}
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
      {children.length > 0 &&
        children.map((child, index) => (
          <ComponentMaker key={index} {...child} />
        ))}
    </Fragment>
  );
};

export default ComboBox;
