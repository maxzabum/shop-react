import { PRODUCTS_FETCH, PRODUCT_DEL } from "../actions/types";
export default function (state = [], action) {
  switch (action.type) {
    case PRODUCTS_FETCH:
      return action.payload;
    case PRODUCT_DEL:
      return action.payload;
    default:
      return state;
  }
}
