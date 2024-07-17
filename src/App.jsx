import "./App.css";
import RandomPokemon from "./RandomPokemon";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import DynamicStyles from "./DynamicStyles";
import ColorList from "./ColorList";
import SlotMachine from "./SlotMachine";

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
    </>
  );
}

export default App;
