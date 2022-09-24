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
    font-family: "Knewave", cursive;
    background-color: #DEDEE3;
    font-size: 1.2rem;
    margin: 5px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    border: solid 1px #000;
    color: #353540;
  }
`
