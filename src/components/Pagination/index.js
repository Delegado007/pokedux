import React from 'react';
import { PaginationContainer, ButtonPagination } from './styles';
import { setPagination } from '../../slices/dataSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Pagination = () => {
  const pagination = useSelector((state) => state.data.Pagination);
  const dispatch = useDispatch();
  const chnageLimitAndOffset = (numberButton) => {
    let newLimit = numberButton * 10;
    let newOffset = newLimit - 10;
    dispatch(setPagination({ limit: 10, offset: newOffset }));

  }
  return (
    <PaginationContainer>
      {[1, 2, 3, 4, 5].map((number, index) => (

        <ButtonPagination key={index}>
          <button onClick={() => chnageLimitAndOffset(number)} >{number}</button>
        </ButtonPagination>
      ))
      }
    </PaginationContainer>
  )
}