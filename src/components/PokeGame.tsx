import { pokedexData } from '../constants/constants';
import { Pokedex } from './Pokedex';

export const PokeGame = () => {
    const defaultProps = pokedexData;
    let hand1 = [];
    let hand2 = [...defaultProps];

    while (hand1.length < hand2.length) {
        let randInx = Math.floor(Math.random() * hand2.length);
        let randPokemon = hand2.splice(randInx, 1)[0];
        hand1.push(randPokemon);
    }

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    return (
    <div>
        <Pokedex pokemons={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemons={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  )
}

export default PokeGame;
