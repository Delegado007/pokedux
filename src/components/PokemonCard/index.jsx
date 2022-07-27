import { useDispatch } from "react-redux";
import { setFavorite } from "../../slices/dataSlice";
import React from "react";
import { StarButton } from "../StarButton";
import "./Styles.scss";

export const PokemonCard = ({ name, image, type, id, favorite }) => {
  const dispatch = useDispatch();
  const typeSting = type.map((elem) => elem.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <div className="b-game-card">
      <StarButton isFavorite={favorite} chanFavs={handleOnFavorite} />
      <div className="b-game-card__cover">
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
