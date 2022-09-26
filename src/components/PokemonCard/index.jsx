import React from "react";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../slices/dataSlice";
import { StarButton } from "../StarButton";
import {
  CardContainer,
  CardCover,
  ImgSvg,
  ImgContainer,
  TitlePokemon,
  FotterCard,
} from "./styles";

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
        <TitlePokemon>
          <h1>{name}</h1>
        </TitlePokemon>
        <ImgContainer>
          <ImgSvg src={image} alt="pokemon" />
        </ImgContainer>
        <FotterCard>
          <p>{typeSting}</p>
        </FotterCard>
      </CardCover>
    </CardContainer>
  );
};
