// import { PokemonCard } from "./PokemonCard";
import React from "react";
import { PokemonCard } from "../PokemonCard";
import { Lista, Div, Span } from "./styles";

export const PokemonList = ({
  pokemons,
  searchedPokemons,
  valueImputSearch,
}) => {
  if (valueImputSearch.length > 0 && searchedPokemons.length < 1) {
    return (
      <Div>
        <Span>Nothing found, try searching again.</Span>
      </Div>
    );
  }

  if (searchedPokemons.length > 0) {
    return (
      <Lista>
        {searchedPokemons.map((pokemon) => {
          return (
            <PokemonCard
              name={pokemon.name}
              key={pokemon.name}
              image={pokemon.image.front_default}
              type={pokemon.types}
              id={pokemon.id}
              favorite={pokemon.favorite}
              experience={pokemon.base_experience}
              stats={pokemon.stats}
            />
          );
        })}
      </Lista>
    );
  }
  return (
    <Lista id="list_pokemons">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.image.front_default}
            type={pokemon.types}
            id={pokemon.id}
            favorite={pokemon.favorite}
            experience={pokemon.base_experience}
            stats={pokemon.stats}
          />
        );
      })}
    </Lista>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(""),
};
