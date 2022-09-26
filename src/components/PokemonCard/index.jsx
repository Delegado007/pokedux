import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { RotateCard } from "../../RotateCard";
import { setFavorite } from "../../slices/dataSlice";
import { StarButton } from "../StarButton";
import {
  CardContainer,
  CardCover,
  ImgSvg,
  ImgContainer,
  TitlePokemon,
  FotterCard,
  RotateContainer,
} from "./styles";

export const PokemonCard = ({ name, image, type, id, favorite }) => {
  const [isRotated, setIsRotated] = useState(false);
  const dispatch = useDispatch();
  const typeSting = type.map((elem) => elem.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  const handleRotateCard = () => {
    // const cardSelected = document.querySelector(`.b-game-card-${id}`);
    // console.log(cardSelected.classList);
    setIsRotated(!isRotated);
  };

  return (
    <CardContainer open={isRotated} className={`b-game-card-${id}`}>
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
        <RotateContainer>
          <button onClick={() => handleRotateCard()}>
            <RotateCard />
          </button>
        </RotateContainer>
      </CardCover>
    </CardContainer>
  );
};
