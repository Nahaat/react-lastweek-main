import { useState } from "react";

const useInput = (validationFn) => {

  const [value, setValue] = useState("");
  const [isChange, setIsChange] = useState(false);
  // const [usernameError, setUsernameError] = useState(false);

  const inputHandler = (event) => {
    setValue(event.target.value);
    setIsChange(true);
  }

  const isError = isChange && validationFn(value)

  return {
    value,
    isError,
    inputHandler
  }
}

export default useInput;