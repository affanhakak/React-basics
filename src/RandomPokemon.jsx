import "./RandomPokemon.css";
export default function RandomPokemon() {
  const pokeNumber = Math.floor(Math.random() * 151 + 1);
  const pokeUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNumber}.png`;
  return (
    <>
      <div className="randomPokemon">
        <h1>Pokemon #{pokeNumber}</h1>
        <img src={pokeUrl} className="pokeImg" />
      </div>
    </>
  );
}

// showing random content and utilizing an outside api to display pokemon images
