import axios from "axios";
import { ORDERS_FECTH, ORDER_DEL } from "./types";
export const orderFecth = () => {
  return (dispatch) => {
    axios.get("http://localhost:3001/orders").then((res) => {
      dispatch({ type: ORDERS_FECTH, payload: res.data });
    });
  };
};
export const orderDelete = (id) => {
  return (dispatch) => {
    axios.delete("http://localhost:3001/orders/" + id).then((res) => {
      //   this.setState({ order: res.data });
      axios.get("http://localhost:3001/orders").then((res) => {
        {
          dispatch({ type: ORDER_DEL, payload: res.data });
        }
      });
    });
  };
};
