export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3 + 1);
  const num2 = Math.floor(Math.random() * 3 + 1);

  return (
    <>
      {num1 === num2 ? <h3>You Win</h3> : null}
      <h2>Die 1 value : {num1}</h2>
      <h2>Die 2 value : {num2}</h2>
    </>
  );
}

// conditionals in react
