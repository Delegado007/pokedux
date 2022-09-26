import React from "react";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../slices/dataSlice";
import { StarButton } from "../StarButton";
import { CardContainer, CardCover, ImgSvg } from "./styles";

export const PokemonCard = ({ name, image, type, id, favorite }) => {
  const dispatch = useDispatch();
  const typeSting = type.map((elem) => elem.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <CardContainer className="b-game-card">
      <CardCover className="b-game-card">
        <StarButton isFavorite={favorite} chanFavs={handleOnFavorite} />
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <ImgSvg src={image} alt="pokemon" />
        </div>
        <div>
          <p>{typeSting}</p>
        </div>
      </CardCover>
    </CardContainer>

    // <Card
    //   title={name}
    //   cover={<img src={image} alt={name} />}
    //   extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    // >
    //   <Meta description={typeSting} />
    // </Card>
  );
};
