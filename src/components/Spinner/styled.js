import styled, { keyframes } from "styled-components";

const rotateSpinner = keyframes`
  100% {
    transform: rotate(1turn)
  }
`
const pulse = keyframes`
  1% {opacity: 1;}
  25% {opacity: 0.1;}
  50% {opacity: 1;}
  75% {opacity: 0.1;}
  100% {opacity: 1;}
`

export const SpinnerContainer = styled.div`
  background-color: #353540;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;  
  height: 100vh;
  & svg {
    position: absolute;
    top: calc(50% - 40px);
    left: calc(50% - 40px);
    width: 80px;
    height: 80px;
    animation: ${pulse} 2s infinite;
  }
`

export const SpinnerDiv = styled.div`
  width: 150px;
  aspect-ratio: 1;
  display: grid;
  border:6px solid #0000;
  border-radius: 50%;
  border-right-color: #f6d365;
  animation: ${rotateSpinner} 1s infinite linear;
  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    margin: 4px;
    border: inherit;
    border-radius: 50%;
    animation: ${rotateSpinner} 2s infinite;
  }
  &::after {
    margin: 14px;
    animation-duration: 3s;
  }
`

// .spinner-5 {
//   width: 50px;
//   aspect-ratio: 1;
//   display: grid;
//   border:4px solid #0000;
//   border-radius: 50%;
//   border-right-color: #25b09b;
//   animation: s5 1s infinite linear;
// }
// .spinner-5::before,
// .spinner-5::after {
//   content: "";
//   grid-area: 1/1;
//   margin: 2px;
//   border: inherit;
//   border-radius: 50%;
//   animation: s5 2s infinite;
// }
// .spinner-5::after {
//   margin: 8px;
//   animation-duration: 3s;
// }

// @keyframes s5{
//   100%{transform: rotate(1turn)}
// }