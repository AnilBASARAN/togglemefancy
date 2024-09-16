import Toggle from './Toggle';
import { useState } from "react";
import clsx from "clsx";
import './App.css';

function App() {

  const [isOn, setIsOn] = useState(true);

  return (
    <div className={clsx(" h-screen flex justify-center items-center",isOn ? "bg-black":"bg-white")}>
    
        <Toggle enable={setIsOn} status={isOn} />
    </div>
  );
}

export default App;
