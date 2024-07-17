export default function DynamicStyles() {
  const num1 = Math.floor(Math.random() * 3 + 1);
  const num2 = Math.floor(Math.random() * 3 + 1);
  const isSame = num1 === num2;
  const styles = { color: isSame ? "green" : "red" };
  return (
    <>
      <h1 style={styles}>I am purple</h1>
      <p>num1:{num1}</p>
      <p>num2:{num2}</p>
    </>
  );
}

// dynamic styles with conditionals
