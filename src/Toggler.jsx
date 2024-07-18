import { useState } from "react";

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  const toggleIsHappy = () => {
    setIsHappy(!isHappy);
  };
  const dblInc = () => {
    setCount(count + 2);
  };
  const styles = {
    background: isHappy ? "green" : "red",
    color: isHappy ? "white" : "black",
  };
  return (
    <>
      <p>{isHappy ? "😃, I am Happy" : "😡, I am Angry"}</p>
      <button style={styles} onClick={toggleIsHappy}>
        Change Expression
      </button>
      <p>{count}</p>
      <button onClick={dblInc}>+</button>
    </>
  );
}

//we can use multiple pieces of states within a component eg setCount and setIsHappy in this case
