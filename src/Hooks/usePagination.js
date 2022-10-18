import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPagination } from "../slices/paginationSlice";


export const usePagination = () => {
  const dispatch = useDispatch();

  const {
    pagination: {
      nextPage,
      prevPage,
      pagination
    },
    data: {
      countPokemones
    } } = useSelector((state) => state)

  useEffect(() => {
    const localPage = JSON.parse(window.localStorage.getItem('pagePoke')) || { limit: 10, offset: 0 };
    dispatch(setPagination(localPage));
  }, [])

  const totalPages = Math.ceil(countPokemones / 10);
  const handleChangePagination = (numberButton) => {
    let newLimit = (numberButton + 1) * 10;
    let newOffset = newLimit - 10;
    dispatch(setPagination({ limit: newLimit, offset: newOffset }));
    window.localStorage.setItem('pagePoke', JSON.stringify({ limit: newLimit, offset: newOffset }))
  }

  const actualPage = pagination.limit / 10;
  const arrayPagination = Array.from({ length: totalPages }, (v, i) => i)
  let renderArray = []
  if (totalPages == actualPage) {
    renderArray = arrayPagination.slice(-3);
  }
  if (actualPage == 1) {
    renderArray = arrayPagination.slice(0, 3);
  }
  if (actualPage != 1 & actualPage != totalPages) {
    renderArray = arrayPagination.slice(actualPage - 2, actualPage + 1)
  }
  console.log("actual page: " + actualPage)
  return {
    renderArray,
    actualPage,
    nextPage,
    prevPage,
    countPokemones,
    arrayPagination,
    handleChangePagination,
  }
}