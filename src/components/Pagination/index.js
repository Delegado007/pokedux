import React, { useEffect, useState } from 'react';
import { PaginationContainer, ButtonPagination } from './styles';
import { setPagination } from '../../slices/paginationSlice';
import { useDispatch } from 'react-redux';


export const Pagination = (
  {
    nextPage,
    prevPage,
    countPokemones,
    actualPage,
    arrayPagination,
    handleChangePagination,
    renderArray,
  }
) => {

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
      {renderArray.map((number, index) => (
        <ButtonPagination key={index}>
          <a href="#list_pokemons">
            <button className={`button_pag`} onClick={(event) => handlePagination(event.target, number)} >{number + 1}</button>
          </a>
        </ButtonPagination>
      ))
      }
    </PaginationContainer>
  )
}