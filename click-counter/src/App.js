import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import Button3 from "./components/Button3";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button2 onClick={incrementCount} />
      <Button3 onClick={incrementCount} />
      {count > 0 && (
        <div>
          <button className="btn" onClick={resetCount}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
