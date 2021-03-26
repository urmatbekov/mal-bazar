import { combineReducers } from "redux";
import categories from "./categories";
import products from "./products";

const reduce = combineReducers({
    categories,
    products
})

export default reduce;