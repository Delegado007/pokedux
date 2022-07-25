import React from "react";
import { ContainerSearch } from "./styles";
import "./stilos.scss";

export const Searcher = () => {
  return (
    <ContainerSearch>
      <label>
        <input type="text" />
        <ul>
          <li s="">s</li>
          <li e="">e</li>
          <li a="">a</li>
          <li r="">r</li>
          <li c="">c</li>
          <li h="">h</li>
        </ul>
      </label>
    </ContainerSearch>
  );
};
