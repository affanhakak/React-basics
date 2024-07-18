function handleClick() {
  console.log("I am clicked");
}

export default function Clicker() {
  return (
    <>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}
