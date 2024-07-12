import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const increasecount = () => {
    setCounter(counter + 1);
    console.log(`counter value : ${counter}`);
  };

  return (
    <>
      <h1>Hello to all</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={increasecount}>increase counter</button>
    </>
  );
}

export default App;
