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
  StatsContainer,
  Progress,
  ProgressElement,
  ProgressContainer,
} from "./styles";

export const PokemonCard = ({
  name,
  image,
  type,
  id,
  favorite,
  experience,
  stats,
}) => {
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
        <ImgContainer className="img-svg">
          <ImgSvg src={image} alt="pokemon" />
        </ImgContainer>
        <FotterCard>
          <p>Type: {typeSting}</p>
        </FotterCard>
        <RotateContainer>
          <button onClick={() => handleRotateCard()}>
            <RotateCard />
          </button>
        </RotateContainer>
        <StatsContainer>
          <h2>Experience</h2>
          <ProgressElement>
            <p>{experience} xp</p>
            <ProgressContainer value={experience}>
              <Progress max="265" value={experience}>
                {experience}
              </Progress>
            </ProgressContainer>
          </ProgressElement>
          <h2>Stats</h2>
          {stats.map((stat) => {
            return (
              <ProgressElement key={stat.stat.name}>
                <p>{`${stat.base_stat} ${stat.stat.name}`}</p>
                <ProgressContainer value={stat.base_stat}>
                  <Progress max="265" value={stat.base_stat}>
                    {stat.base_stat}
                  </Progress>
                </ProgressContainer>
              </ProgressElement>
            );
          })}
        </StatsContainer>
      </CardCover>
    </CardContainer>
  );
};
