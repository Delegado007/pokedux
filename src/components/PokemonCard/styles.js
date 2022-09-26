import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  z-index: 1;
  font-size: 0.8rem;
  width: 270px;
  height: 330px;
  perspective: 1000px;
  margin: 30px;
  
  ${({ open }) => open
    ? `transform: rotateY(180deg);
      transition: 1s;
      transition-timing-function: linear;
       & .star {
        opacity: 0;
        transition-delay: 0.5s;
        visibility: none;
       }
       & div div:nth-child(2), div div:nth-child(4)  {
        opacity: 0;
        transition-delay: 0.5s;
        visibility: none;
       }
       & div div:nth-child(3)  {
        opacity: 0.1;
        transition-delay: 0.5s;
       }
       `
    : `transform: rotate(0);
       transition: 1s;
       transition-timing-function: linear;
       & .star {
        opacity: 1;
        transition-delay: 0.5s;
       }
       & div div:nth-child(2), div div:nth-child(4)  {
        opacity: 1;
        transition-delay: 0.5s;
       }
       & div div:nth-child(3)  {
        opacity: 1;
        transition-delay: 0.5s;
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

export const ImgContainer = styled.div`
  height: 210px;
  width: 230px;
`

export const TitlePokemon = styled.div`
  margin-top: 5px;
  & h1::first-letter {
    text-transform: uppercase;
  }
`
export const FotterCard = styled.div`
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


