import { combineReducers } from "redux";
import OrderReducer from "./OrderReducer";
import ProductReducer from "./ProductReducer";
import { reducer as reduxForm } from "redux-form";
const rootReducer = combineReducers({
  orders: OrderReducer,
  products: ProductReducer,
  form: reduxForm,
});
export default rootReducer;
