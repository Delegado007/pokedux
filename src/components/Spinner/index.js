import React from "react";
import { CharizardSpinner } from "../CharizardSpinner";
import { SpinnerContainer, SpinnerDiv } from "./styled";

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <CharizardSpinner />
      <SpinnerDiv>
      </SpinnerDiv>
    </SpinnerContainer>
  )
}