import { BUY_PEPSI } from "./PepsiType";

const initialState = {
  numOfPepsi: 30,
};

const PepsiReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PEPSI:
      return {
        ...state,
        numOfPepsi: state.numOfPepsi - 1,
      };
    default:
      return state;
  }
};

export default PepsiReducer;
