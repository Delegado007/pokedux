import styled from 'styled-components';
import { pulse } from '../../styles/animations';


export const CardContainer = styled.div`
  position: relative;
  z-index: 1;
  font-size: 0.8rem;
  width: 270px;
  height: 380px;
  perspective: 1000px;
  margin: 30px;
  
  ${({ open }) => open
    ? `transform: rotateY(180deg);
      transition: 1s;
      
       & .star {
        opacity: 0;
        transition-delay: 0.3s;
        visibility: none;
       }
       & ${TitlePokemon}, ${FotterCard}  {
        opacity: 0;
        transition-delay: 0.3s;
        visibility: none;
       }
       & .img-svg  {
        opacity: 0.15;
        transition-delay: 0.3s;
       }
       & ${StatsContainer} {        
        opacity: 1;
        transition-delay: 0.3s;
       }
       `
    : `transform: rotate(0);
       transition: 1s;
       
       & .star {
        opacity: 1;
        transition-delay: 0.3s;
       }
       & ${TitlePokemon}, ${FotterCard}  {
        opacity: 1;
        transition-delay: 0.3s;
       }
       & .img-svg  {
        opacity: 1;
        transition-delay: 0.3s;
       }
       & ${StatsContainer} {        
        opacity: 0;
        transition-delay: 0.3s;
       }
       `};
  &:hover .b-game-card {
    transform: rotateX(6deg) translateY(-6px) rotateY(-2deg);
    &::after {
      transform: translateX(0%) translateY(0%) ;
    }
  }
  &::before {
  display: block;
  content: "";
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  background: rgba(#000, 0.5);
  box-shadow: 0 6px 12px 12px rgba(#000, 0.4);
  will-change: opacity;
  transform-origin: top center;
  transform: skewX(0.001deg);
  transition: transform 0.35s ease-in-out, opacity 0.5s ease-in-out;
}

  &:hover::before {
  opacity: 0.6;
  transform: rotateX(7deg) translateY(-6px) scale(1.05);  
}
`

export const CardCover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  background-size: cover;
  perspective-origin: 50% 50%;
  transform-style: preserve-3d;
  transform-origin: top center;
  will-change: transform;
  transform: skewX(0.001deg);
  transition: transform 0.35s ease-in-out;
  &::after {
    display: block;
    content: "";
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background: linear-gradient(
    226deg,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.4) 35%,
    rgba(255, 255, 255, 0.2) 42%,
    rgba(255, 255, 255, 0) 60%
    );
    transform: translateY(-20%);
    will-change: transform;
    transition: transform 0.65s cubic-bezier(0.18, 0.9, 0.58, 1);
  }
  & p {
    font-size: 1rem;
  }
`


export const ImgSvg = styled.img`
  display: block;
  margin: auto;
  height: 100%;
  width: auto;
  max-width: fit-content;
  max-width: -moz-available;
  max-width: -webkit-fill-available;
`

export const PlaceholderImgSvg = styled.div`
  display: block;
  margin: auto;
  height: 100%;
  width: auto;
  max-width: fit-content;
  max-width: -moz-available;
  max-width: -webkit-fill-available;
  border-radius: 25px;
  background-color: #FDA284;
  animation: ${pulse} 2.5s infinite;
`

export const ImgContainer = styled.div`
  height: 210px;
  width: 230px;
`

export const TitlePokemon = styled.div`
  margin-top: 10px;
  & h1::first-letter {    
    text-transform: uppercase;
  }
  & h1{
    text-align: center;
  }
`
export const FotterCard = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  margin-bottom: 10px;
`

export const RotateContainer = styled.div`
  position: absolute;
  background-color: #ff8a00;
  z-index: 101;
  bottom: 0px;
  right: 0px;
  padding: 6px 4px 4px 6px;
  width: 40px;
  height: 40px;
  border-radius: 5px 0 0 0;
  box-shadow: rgb(82, 16, 0) 0px 3px 7px inset;
  & button {
    background: none;
    border: 0;
    color: inherit;
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  & svg {
    width: 30px;
    height: 30px;
    fill: black;
  }
`

export const StatsContainer = styled.div`  
  z-index: 102;
  position: absolute; 
  width: 270px;
  height: 330px;
  top: 20px;
  right: 0;
  transform: rotateY(-180deg);
  & h2{
    margin-top: 5px;
    text-align: center;
  }
  
`

export const Progress = styled.progress`
  opacity: 0;
  height: 20px;
  width: 170px;  
`
export const ProgressElement = styled.div`
  display: flex;
  width: 230px;  
  margin: auto;
  & div img {
    height: 36px;
  }
  &:nth-child(2) .stats-pokemon div {
    &::before{
      background: #000;
      width: ${props => `calc(${props.value} * 100% / 267 );`};
    }
  }
  &:nth-child(3) .stats-pokemon div  {
    &::before{
      background: #02A73E;
      width: ${props => `calc(${props.value} * 100% / 250);`};
    }
  }
  &:nth-child(4) .stats-pokemon div  {
    &::before{
      background: red;
      width: ${props => `calc(${props.value} * 100% / 134);`};
    } 
  }
  &:nth-child(5) .stats-pokemon div  {
    &::before{
      background: #FDF21B;
      width: ${props => `calc(${props.value} * 100% / 180);`};
    } 
  }
  &:nth-child(6) .stats-pokemon div  {
    &::before{
      background: #40B3FF;
      width: ${props => `calc(${props.value} * 100% / 154);`};

    } 
  }
  &:nth-child(7) .stats-pokemon div  {
    &::before{
      background: #8C40FF;
      width: ${props => `calc(${props.value} * 100% / 125);`};

    } 
  }
  &:nth-child(8) .stats-pokemon div  {
    &::before{
      background: #FF9340;
      width: ${props => `calc(${props.value} * 100% / 130);`};
    } 
  }
`

export const ImgContainerStat = styled.div`
  width: 50px;
`

export const ProgressContainer = styled.div`  
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  display: inline-block;
  background: #eee;
  height: 10px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    
  }
    
`

export const ImgType = styled.img`
  width: 50px;
  height: 50px;
`

export const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  & p {
    text-align: center;
  }
`
