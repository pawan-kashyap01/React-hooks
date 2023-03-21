import React, { useState } from "react";

const Statehook = () => {
  const [inputValue, setInputValue] = useState("Pawan");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default Statehook;
