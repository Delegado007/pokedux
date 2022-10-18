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
  ImgType,
  TypeContainer,
  ImgContainerStat,
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
  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  const handleRotateCard = () => {
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
          {type.map((typeOfPohemon, index) => {
            return (
              <TypeContainer key={index}>
                <ImgType
                  src={`assets/${typeOfPohemon.type.name}.png`}
                  alt={typeOfPohemon.type.name}
                />
                <p>{typeOfPohemon.type.name}</p>
              </TypeContainer>
            );
          })}
        </FotterCard>
        <RotateContainer>
          <button onClick={() => handleRotateCard()}>
            <RotateCard />
          </button>
        </RotateContainer>
        <StatsContainer>
          <h2>Stats</h2>
          <ProgressElement value={experience}>
            <ImgContainerStat>
              <img src="assets/exp.png" alt="atack" />
            </ImgContainerStat>
            <div className="stats-pokemon">
              <p>{experience} xp</p>
              <ProgressContainer>
                <Progress max="265" value={experience}>
                  {experience}
                </Progress>
              </ProgressContainer>
            </div>
          </ProgressElement>
          {stats.map((stat, index) => {
            return (
              <ProgressElement key={index} value={stat.base_stat}>
                <ImgContainerStat>
                  <img src={`assets/${stat.stat.name}.png`} alt="atack" />
                </ImgContainerStat>
                <div className="stats-pokemon">
                  <p>{`${stat.base_stat} ${stat.stat.name}`}</p>
                  <ProgressContainer>
                    <Progress max="110" value={stat.base_stat}>
                      {stat.base_stat}
                    </Progress>
                  </ProgressContainer>
                </div>
              </ProgressElement>
            );
          })}
        </StatsContainer>
      </CardCover>
    </CardContainer>
  );
};
