import { Fragment, useEffect } from "react";

import { FormElement } from "interfaces/form-model";
import ComponentMaker from "components/ComponentMaker";
import { useDispatch, useSelector } from "store";
import { getField, setField } from "store/slice";

const TextBox = (props: FormElement) => {
  const { name, defaultValue, style, children, placeholder, required } = props;
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

  return (
    <Fragment>
      <input
        type="text"
        name={name}
        style={style}
        placeholder={placeholder}
        defaultValue={defaultValue}
        required={required}
        onChange={(e) => handleFieldUpdate(e.target.value)}
      />
      {children.length > 0 &&
        children.map((child, index) => (
          <ComponentMaker key={index} {...child} />
        ))}
    </Fragment>
  );
};

export default TextBox;
