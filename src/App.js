import "./App.css";
import Statehook from "./UseState/Statehook";
import Reducerhook from "./UseReducer/Reducerhook";
import Effecthook from "./UseEffect/Effecthook";
import Refhook from "./UseRef/Refhook";
import LayoutEffecthook from "./UseLayoutEffect/LayoutEffecthook";
import ImperativeHandle from "./UseImperativeHandle/ImperativeHandle";
import Contexthook from "./UseContext/Contexthook";
import Memohook from "./UseMemo/Memohook";
import CallBackhook from "./UseCallback/Callbackhook";

function App() {
  return (
    <div > Hooks !!
      < Statehook />
      < Reducerhook />
      < Effecthook />
      < Refhook />
      < LayoutEffecthook />
      < ImperativeHandle />
      < Contexthook />
      < Memohook />
      < CallBackhook />
    </div>
  );
}

export default App;
