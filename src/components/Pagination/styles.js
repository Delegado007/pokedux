import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 100vw;
  margin-bottom: 15px;   
`

export const ButtonPagination = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 60px;
  & button {
    font-family: 'Righteous';
    background-color: #fda284;
    font-size: 1.2rem;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    border: solid 1px #000;
    color: #353540;
    cursor: pointer;
    &.active {
      box-shadow: rgb(52 52 52) 0px 3px 7px inset;
      background-color: #DEDEE3;
    }
  }
  & button:disabled {
    opacity: 0.35;
  }
  & a {
    margin: 5px;
    height: 50px;
    width: 60px;
  }
`
