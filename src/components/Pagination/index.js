import React, { useEffect } from 'react';
import { PaginationContainer, ButtonPagination } from './styles';
import { useSelector } from 'react-redux';

export const Pagination = (
  {
    renderArray,
    actualPage,
    handleChangePagination,
    handlePrevPage,
    handleNextPage,
  }
) => {
  const pagination = useSelector((state) => state.pagination);

  useEffect(() => {
    if (renderArray.length > 1) {
      const buttons = document.querySelectorAll(`.button_pag`);
      const buttonsAsArray = [...buttons];
      buttonsAsArray.map((itemInArray) => {
        if (itemInArray.innerHTML == actualPage) {
          itemInArray.className += ' active';
        } else {
          itemInArray.classList.remove("active");
        }
      })
    }

  }, [renderArray])


  const handlePagination = (target, numberButton) => {
    const buttons = document.querySelectorAll(`.button_pag`);
    const buttonsAsArray = [...buttons];
    buttonsAsArray.map((itemInArray) => {
      if (itemInArray === target) {
        itemInArray.className += ' active';
      } else {
        itemInArray.classList.remove("active");
      }
    })
    handleChangePagination(numberButton);
  }

  return (
    <PaginationContainer>
      <ButtonPagination>
        <a href="#list_pokemons">
          <button className={`button_prev`} disabled={pagination.prevPage} onClick={() => handlePrevPage()} >{"<"}</button>
        </a>
      </ButtonPagination>
      {renderArray.map((number, index) => (
        <ButtonPagination key={index}>
          <a href="#list_pokemons">
            <button className={`button_pag`} onClick={(event) => handlePagination(event.target, number)} >{number + 1}</button>
          </a>
        </ButtonPagination>
      ))
      }
      <ButtonPagination>
        <a href="#list_pokemons">
          <button className={`button_next`} disabled={pagination.nextPage} onClick={() => handleNextPage()} >{">"}</button>
        </a>
      </ButtonPagination>
    </PaginationContainer>
  )
}