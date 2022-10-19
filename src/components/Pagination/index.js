import React, { useEffect, useState } from 'react';
import { PaginationContainer, ButtonPagination } from './styles';
import { useSelector } from 'react-redux';

export const Pagination = (
  {
    renderArray,
    totalPages,
    actualPage,
    handleChangePagination,
    handlePrevPage,
    handleNextPage,
  }
) => {
  const [disableNextButton, setDisableNextButton] = useState(false)
  const [disablePrevButton, setDisablePrevButton] = useState(false)
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
    if (totalPages === actualPage) {
      setDisableNextButton(true)
    } else {
      setDisableNextButton(false)
    }
    if (actualPage === 1) {
      setDisablePrevButton(true)
    } else {
      setDisablePrevButton(false)
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
          <button className={`button_prev`} disabled={disablePrevButton} onClick={() => handlePrevPage()} >{"<"}</button>
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
          <button className={`button_next`} disabled={disableNextButton} onClick={() => handleNextPage()} >{">"}</button>
        </a>
      </ButtonPagination>
    </PaginationContainer>
  )
}