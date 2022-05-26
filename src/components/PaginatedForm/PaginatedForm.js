import React, {
  createContext,
  useRef,
  useState,
  useMemo,
  useContext,
} from "react";

import "./paginatedForm.css";

const PaginatedFormContext = createContext();

const PaginatedForm = ({ children }) => {
  const [stepCount, setStepCount] = useState(1);
  const formData = useRef({});
  const updateFormData = (key, value) => {
    formData.current[key] = value;
  };

  const isFirstStep = useMemo(() => {
    return stepCount === 1;
  }, [stepCount]);

  const isLastStep = useMemo(() => {
    const totalSteps = React.Children.count(children);
    return stepCount === totalSteps;
  }, [children, stepCount]);

  const handleBackBtnClick = () => {
    if (isFirstStep) return console.error("This is already the first step");
    setStepCount(() => stepCount - 1);
  };

  const handleNextBtnClick = () => {
    console.log("formData", formData.current);
    if (isLastStep) return console.error("This is the last step");
    setStepCount(() => stepCount + 1);
  };

  const formSteps = () => {
    if (React.Children.count(children) === 1) {
      return [children];
    }
    return React.Children.toArray(children);
  };

  return (
    <PaginatedFormContext.Provider value={{ updateFormData, stepCount }}>
      <form>{formSteps()[stepCount - 1]}</form>
      <div className="form-controls">
        <button onClick={handleBackBtnClick}>Back</button>
        <button onClick={handleNextBtnClick}>Next</button>
      </div>
    </PaginatedFormContext.Provider>
  );
};

export const useFormContext = () => {
  const ctx = useContext(PaginatedFormContext);
  // error handling here
  return ctx;
};

export default PaginatedForm;
