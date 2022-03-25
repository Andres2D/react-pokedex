import { Pokedex } from './components/Pokedex';
import { pokedexData } from './constants/constants';

function App() {
  return (
    <Pokedex pokemons={pokedexData} />
  );
}

export default App;
