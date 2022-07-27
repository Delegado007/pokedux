import React from "react";
import { Star } from "../icons/Star";
import { StarFill } from "../icons/StarFill";

export const StarButton = ({ isFavorite, chanFavs }) => {
  console.log(isFavorite)
  return (
    isFavorite
      ?
      <button onClick={chanFavs}>
        <StarFill />
      </button>
      :
      <button onClick={chanFavs}>
        <Star />
      </button>



  )
};