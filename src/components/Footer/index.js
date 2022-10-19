import React from "react";
import { GitHub } from "../GitHub";
import { Linkedin } from "../Linkedin";
import {
  ContainerFooter,
  MaxWidthContainer,
  DeveloperBy,
  LinksRedes,
} from "./styles";

export const Footer = () => {
  return (
    <ContainerFooter>
      <MaxWidthContainer>
        <DeveloperBy>
          <p>Developer by <strong style={{ color: "#FDA284" }}>DelegadoDev</strong></p>
          <p>subiris.4116@gmail.com</p>
        </DeveloperBy>
        <LinksRedes>
          <div>
            <p>Linkedin</p>
            <Linkedin />
          </div>
          <div>
            <p>GitHub</p>
            <GitHub />
          </div>
        </LinksRedes>
      </MaxWidthContainer>
    </ContainerFooter >
  )
}