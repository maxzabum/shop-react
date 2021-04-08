import axios from "axios";
import { PRODUCTS_FETCH, PRODUCT_DEL } from "./types";
export const productsFecth = () => {
  return (dispatch) => {
    axios.get("http://localhost:3001/products").then((res) => {
      dispatch({ type: PRODUCTS_FETCH, payload: res.data });
    });
  };
};
export const productDelete = (id) => {
  return (dispatch) => {
    axios.delete("http://localhost:3001/products/" + id).then((res) => {
      //   this.setState({ order: res.data });
      axios.get("http://localhost:3001/products").then((res) => {
        {
          dispatch({ type: PRODUCTS_FETCH, payload: res.data });
        }
      });
    });
  };
};
