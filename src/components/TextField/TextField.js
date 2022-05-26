import "./textField.css";
import { useState } from "react";
import { useStepContext } from "../FormStep/FormStep";

const TextField = ({ ...otherProps }) => {
  const { updateFormStepData } = useStepContext();
  const [textValue, setTextValue] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    updateFormStepData(id, value);
    setTextValue(value);
  };

  return (
    <input
      type="text"
      value={textValue}
      onChange={handleChange}
      {...otherProps}
    />
  );
};

export default TextField;
