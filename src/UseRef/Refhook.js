import React, { useRef, useState } from "react";

function Refhook() {
  const inputRef = useRef(null);
  const [name, setName] = useState(null);
  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus(); 
    setName(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Hello {name}</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default Refhook;
