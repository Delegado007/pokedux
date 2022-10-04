import React from "react";
import { Star } from "../icons/Star";
import { StarFill } from "../icons/StarFill";
import { Button } from './styles.js'

export const StarButton = ({ isFavorite, chanFavs }) => {
  return (
    isFavorite
      ? <Button onClick={() => chanFavs()}><StarFill /></Button>
      : <Button onClick={() => chanFavs()}><Star /></Button>
  )
};
