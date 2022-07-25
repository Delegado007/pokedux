// import { useDispatch } from "react-redux";
// import { setFavorite } from "../slices/dataSlice";

import React from "react";

export const PokemonCard = ({ name, image, type, id, favorite }) => {
  // const dispatch = useDispatch();
  const typeSting = type.map((elem) => elem.type.name).join(", ");

  // const handleOnFavorite = () => {
  //   dispatch(setFavorite({ pokemonId: id }));
  // };
  // const URL_IMAG =
  //   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png";
  return (
    <div>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <img src={image} alt="pokemon" />
      </div>
      <div>
        <p>{typeSting}</p>
      </div>
    </div>

    // <Card
    //   title={name}
    //   cover={<img src={image} alt={name} />}
    //   extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    // >
    //   <Meta description={typeSting} />
    // </Card>
  );
};
