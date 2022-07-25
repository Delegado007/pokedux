// import { PokemonCard } from "./PokemonCard";
import React from "react";
import { PokemonCard } from "../PokemonCard";
// import { Lista } from "./stylesPokemonList";

export const PokemonList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.front_default}
            type={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
