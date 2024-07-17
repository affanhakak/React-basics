import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ items }) {
  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <ShoppingListItem
            key={i.id}
            name={i.name}
            quantity={i.quantity}
            completed={i.completed}
          />
          //   <ShoppingListItem key={i.id}{...i}/>  spread operator
        ))}
      </ul>
    </>
  );
}
