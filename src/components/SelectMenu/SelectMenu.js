import { useState } from "react";
import { useStepContext } from "../FormStep/FormStep";
import "./selectMenu.css";

const SelectMenu = ({ options, id, ...otherProps }) => {
  const [selectValue, setSelectValue] = useState(options[0].value);
  const { updateFormStepData } = useStepContext();

  const handleChange = (e) => {
    const { value } = e.target;
    updateFormStepData(id, value);
    setSelectValue(value);
  };

  return (
    <select id={id} value={selectValue} onChange={handleChange}>
      {options.map(({ label, value }) => (
        <option
          key={value}
          label={label}
          value={value}
          {...otherProps}
        ></option>
      ))}
    </select>
  );
};

export default SelectMenu;
