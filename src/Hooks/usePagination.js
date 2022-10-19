import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPagination, setNextPage, setPrevPage } from "../slices/paginationSlice";


export const usePagination = () => {
  const dispatch = useDispatch();

  const { pagination: { pagination }, data: { countPokemones } }
    = useSelector((state) => state)

  const totalPages = Math.ceil(countPokemones / 10);
  const arrayPagination = Array.from({ length: totalPages }, (v, i) => i)
  const actualPage = pagination.limit / 10;
  let renderArray = []
  if (totalPages == actualPage) {
    renderArray = arrayPagination.slice(-3);
    dispatch(setNextPage(true))
  }
  if (actualPage == 1) {
    renderArray = arrayPagination.slice(0, 3);
    dispatch(setPrevPage(true))
  }
  if (actualPage != 1 & actualPage != totalPages) {
    renderArray = arrayPagination.slice(actualPage - 2, actualPage + 1)
    dispatch(setPrevPage(false))
    dispatch(setNextPage(false))
  }
  const handleChangePagination = (numberButton) => {
    const newLimit = (numberButton + 1) * 10;
    const newOffset = newLimit - 10;
    dispatch(setPagination({ limit: newLimit, offset: newOffset }));
    window.localStorage.setItem('pagePoke', JSON.stringify({ limit: newLimit, offset: newOffset }))
  }

  const handleNextPage = () => {
    if (actualPage < totalPages) {
      const newLimit = pagination.limit + 10;
      const newOffset = newLimit - 10;
      dispatch(setPagination({ limit: newLimit, offset: newOffset }));
    }
  }

  const handlePrevPage = () => {
    const newLimit = pagination.limit - 10;
    const newOffset = newLimit - 10;
    dispatch(setPagination({ limit: newLimit, offset: newOffset }));
  }
  useEffect(() => {
    const localPage = JSON.parse(window.localStorage.getItem('pagePoke')) || { limit: 10, offset: 0 };
    dispatch(setPagination(localPage));
  }, [])

  return {
    renderArray,
    actualPage,
    handleChangePagination,
    handlePrevPage,
    handleNextPage,
  }
}