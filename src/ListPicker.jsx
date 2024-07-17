export default function ListPicker({ values }) {
  const randomIndex = Math.floor(Math.random() * values.length);
  const randomElement = values[randomIndex];
  return (
    <>
      <p>The List Picker Values are: {values}</p>
      <p>Random element is {randomElement}</p>
    </>
  );
}

// passing objects and arrays as props
