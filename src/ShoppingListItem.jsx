export default function ShoppingListItem({ name, quantity, completed }) {
  const styles = {
    color: completed ? "green" : "red",
    textDecoration: completed ? "none" : "line-through",
  };
  return (
    <>
      <li style={styles}>
        {name}--{quantity}
      </li>
    </>
  );
}
