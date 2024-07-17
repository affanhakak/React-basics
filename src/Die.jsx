export default function Die({ numSides = 50 }) {
  const roll = Math.floor(Math.random() * numSides + 1);
  return (
    <>
      <h1>
        {numSides} sided die rolls: {roll}
      </h1>
    </>
  );
}

// Destructuring props and using default props
