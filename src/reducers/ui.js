import { SET_LOADING } from "../actions/types";

const initialState = {
  loading: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}