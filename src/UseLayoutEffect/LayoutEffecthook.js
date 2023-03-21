import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffecthook() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
    inputRef.current.value = "BYE";
    console.log('LayoutEffect', Date.now())
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
    console.log('Effect', Date.now())
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="Namaste" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffecthook;
