import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../slices/dataSlice";
import { setValueImputSearch } from "../../slices/uiSlice";
import "./stilos.scss";

export const Searcher = () => {
  const [valueImput, setValueImput] = useState("");
  const dispatch = useDispatch();

  const HandleSearch = ({ target }) => {
    setValueImput(target.value);
    dispatch(setValueImputSearch(target.value));
  };

  useEffect(() => {
    dispatch(setSearch(valueImput));
  }, [valueImput]);

  return (
    <div className="list_container">
      <label>
        <input type="text" onChange={HandleSearch} />
        <ul>
          <li s="">s</li>
          <li e="">e</li>
          <li a="">a</li>
          <li r="">r</li>
          <li c="">c</li>
          <li h="">h</li>
        </ul>
      </label>
    </div>
  );
};
