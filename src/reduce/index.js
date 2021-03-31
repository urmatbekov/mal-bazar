import { combineReducers } from "redux";
import categories from "./categories";
import products from "./products";
import {reducer as form} from "redux-form"

const reduce = combineReducers({
    categories,
    products,
    form
})

export default reduce;