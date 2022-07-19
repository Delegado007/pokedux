import { PokemonCard } from "./PokemonCard";
import "./PokemonList.css";

export const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.front_default}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
