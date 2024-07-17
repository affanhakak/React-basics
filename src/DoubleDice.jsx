export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3 + 1);
  const num2 = Math.floor(Math.random() * 3 + 1);
  const result = num1 === num2 ? "You Win Tiger!!!" : "Awww Sheepie :(";
  return (
    <>
      <h1>{result}</h1>
      <h2>Die 1 value : {num1}</h2>
      <h2>Die 2 value : {num2}</h2>
    </>
  );
}

// conditionals in react
