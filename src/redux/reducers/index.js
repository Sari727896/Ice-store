import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import iceCreamReducer from "./iceCreamReducer";
import CartSumReducer from "./CartSumReducer";

const allReducers = combineReducers({
    cart: CartReducer,
    iceCream: iceCreamReducer,
    cartSum:CartSumReducer,
})                                                                                             

export default allReducers