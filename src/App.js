import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(0);

  const counting = () => {
    setCount((i) => i + 1);
  };

  const reducing = () => {
    setCount((i) => i - 1);
  };

  function addResetting() {
    setReset(count + reset);
  }
  function reduceResetting() {
    setReset(reset - count);
  }
  const date = new Date();
  date.setDate(date.getDate() + reset);
  return (
    <div className="calc">
      <div className="first">
        <h1>Hello React</h1>
        <button onClick={counting}>+</button>
        <span>{count}</span>
        <button onClick={reducing}>-</button>
      </div>
      <div className="second">
        <button onClick={addResetting}>+</button>
        <span>{reset}</span>
        <button onClick={reduceResetting}>-</button>
      </div>
      <p>
        {reset} day(s) from Today is {date.toDateString()}
      </p>
    </div>
  );
}
