import { Pokemon } from '../interfaces/pokedex';
import '../styles/Pokecard.css';

interface Props {
    pokemon: Pokemon;
}

const Pokecard = ({pokemon}: Props) => {
  
  const {name, id, type, base_experience} = pokemon; 
  return (
      <div className="Pokecard">
          <h2 className="title">{name}</h2>
          <img 
            className="image" 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} 
            alt={name} 
          />
          <div>Type: {type}</div>
          <div>EXP: {base_experience}</div>
      </div>
  )
}

export default Pokecard;
