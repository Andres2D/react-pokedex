import { Pokemon } from '../interfaces/pokedex';
import fomatId from '../helpers/format-id'; 
import '../styles/Pokecard.css';

interface Props {
    pokemon: Pokemon;
}

const Pokecard = ({pokemon}: Props) => {
//  const imagesUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';  
 const imagesUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail';  
  const {name, id, type, base_experience} = pokemon; 
  return (
      <div className="Pokecard">
          <h2 className="title">{name}</h2>
          <img 
            className="image" 
            src={`${imagesUrl}/${fomatId(id)}.png`} 
            alt={name} 
          />
          <div>Type: {type}</div>
          <div>EXP: {base_experience}</div>
      </div>
  )
}

export default Pokecard;
