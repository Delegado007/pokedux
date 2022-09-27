import React, { useState, useEffect } from 'react';
import { PaginationContainer, ButtonPagination } from './styles';
import { setPagination } from '../../slices/dataSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Pagination = () => {
  const [isActive, setIsActive] = useState("true");
  const pagination = useSelector((state) => state.data.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    const buttons = document.querySelector(`.button_pag`);
    buttons.className += ' active';
  }, [])


  const chnageLimitAndOffset = (target, numberButton) => {
    const buttons = document.querySelectorAll(`.button_pag`);
    const buttonsAsArray = [...buttons]
    let newLimit = numberButton * 10;
    let newOffset = newLimit - 10;
    dispatch(setPagination({ limit: newLimit, offset: newOffset }));
    buttonsAsArray.map((itemInArray) => {
      if (itemInArray === target) {
        itemInArray.className += ' active';
      } else {
        itemInArray.classList.remove("active");
      }
    })

  }
  return (
    <PaginationContainer>
      {[1, 2, 3, 4, 5].map((number, index) => (

        <ButtonPagination key={index}>
          <a href="#list_pokemons">
            <button className={`button_pag`} onClick={(event) => chnageLimitAndOffset(event.target, number)} >{number}</button>
          </a>
        </ButtonPagination>
      ))
      }
    </PaginationContainer>
  )
}