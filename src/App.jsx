import "./App.css";
import RandomPokemon from "./RandomPokemon";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import DynamicStyles from "./DynamicStyles";
import ColorList from "./ColorList";
import SlotMachine from "./SlotMachine";
import ShoppingList from "./ShoppingList";
import Property from "./Property";

const data = [
  { id: 1, name: "eggs", quantity: 12, completed: false },
  { id: 2, name: "milk", quantity: 1, completed: true },
  { id: 3, name: "chicken breasts", quantity: 4, completed: false },
  { id: 4, name: "carrots", quantity: 6, completed: true },
];

const properties = [
  { id: 1, place: "Dessert Yurt", price: 150, rating: 4.9 },
  { id: 2, place: "Lone Mountain Cabin", price: 250, rating: 4.8 },
  { id: 3, place: "Cactus Retreat", price: 300, rating: 4.75 },
  { id: 4, place: "Redwood Treehouse Escape", price: 120, rating: 4.9 },
  { id: 5, place: "Oceanview Condo", price: 140, rating: 4.7 },
  { id: 6, place: "Gold Miner Campground", price: 96, rating: 4.69 },
];

function App() {
  return (
    <>
      <RandomPokemon />
      <Greeter name="Colt" from="Affan" />
      <Greeter name="Affan" from="Colt" />
      <Greeter name="Tabu" from="Affan" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <DynamicStyles />
      <ColorList colors={["red", "blue", "green"]} />
      <SlotMachine val1="G" val2="G" val3="G" />
      <ShoppingList items={data} />
      <Property properties={properties} />
    </>
  );
}

export default App;
