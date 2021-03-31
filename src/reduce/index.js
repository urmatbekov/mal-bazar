import { combineReducers } from "redux";
import categories from "./categories";
import products from "./products";
import {reducer as form} from "redux-form"
import user from "./user"

const reduce = combineReducers({
    categories,
    products,
    form,
    user
})

export default reduce;