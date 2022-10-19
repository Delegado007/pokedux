import styled from "styled-components";

export const ContainerFooter = styled.div`
  margin: 20px 0 auto;
  width: 100%;
  height: 100px;
  background-color: #1C1C21;
  
`

export const MaxWidthContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0;
  margin: auto;
  max-width: 1300px;
  color: #D2D2DA;
`

export const DeveloperBy = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-evenly;
`

export const LinksRedes = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-evenly;
  color: #fda284;
  align-items: end;
  & svg {
    padding-left: 10px;
    width: 40px;
    height: 30px;
  }
  & div {
    display: flex;
    height: 30px;
    align-items: center;
  }
`