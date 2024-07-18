import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  const incNum = () => {
    setNum(num + 1);
  };
  const decNum = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <p>The Count is : {num}</p>
      <button onClick={incNum}>Increment</button>
      <button onClick={decNum}>Decrement</button>
    </div>
  );
}
