import { Pokemon } from '../interfaces/pokedex';
import Pokecard from './Pokecard';
import '../styles/Pokedex.css';

interface Props {
    pokemons: Pokemon[];
    exp: number;
    isWinner: boolean;
}

export const Pokedex = ({pokemons, exp, isWinner}: Props) => {
  return (
    <div>
        <h1 
          className={isWinner ? 'title_pokedex win' : ' title_pokedex lose'} 
        >{isWinner ? 'Winning Hand' : 'Losing Hand'}</h1>
        <p className="title_pokedex">Total experience: {exp}</p>
        <div className="Pokedex">
            {
                pokemons.map(pokemon => <Pokecard key={pokemon.id} pokemon={pokemon} />)
            }
        </div>
    </div>
  )
}
