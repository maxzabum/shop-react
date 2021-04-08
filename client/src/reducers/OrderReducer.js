import { ORDERS_FECTH, ORDER_DEL } from "../actions/types";
export default function (state = [], action) {
  switch (action.type) {
    case ORDERS_FECTH:
      return action.payload;
    case ORDER_DEL:
      return action.payload;
    default:
      return state;
  }
}
