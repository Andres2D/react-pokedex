import { Pokemon } from '../interfaces/pokedex';
import Pokecard from './Pokecard';
import '../styles/Pokedex.css';

interface Props {
    pokemons: Pokemon[];
}

export const Pokedex = ({pokemons}: Props) => {
  return (
    <div>
        <h1 className="title_pokedex">Pokedex</h1>
        <div className="Pokedex">
            {
                pokemons.map(pokemon => <Pokecard pokemon={pokemon} />)
            }
        </div>
    </div>
  )
}
