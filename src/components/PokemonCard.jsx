import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { setFavorite } from "../actions";
import "./PokemonList.css";
import { StarButton } from "./StarButton";
import { useDispatch } from "react-redux";

export const PokemonCard = ({ name, image, type, id, favorite }) => {
  const dispatch = useDispatch();
  const typeSting = type.map((elem) => elem.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typeSting} />
    </Card>
  );
};
