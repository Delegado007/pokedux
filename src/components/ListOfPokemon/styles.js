import styled from "styled-components";

export const Lista = styled.div`
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
    min-height: 100vh;

`

export const Div = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const Span = styled.span`
  display: block;
  font-size: 1.6rem;
  color: #adb5bd;
  width: 100%;
  text-align: center;
`