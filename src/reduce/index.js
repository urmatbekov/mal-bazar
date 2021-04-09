import { combineReducers } from "redux";
import categories from "./categories";
import products from "./products";
import {reducer as form} from "redux-form"
import user from "./user"
import cart from "./cart"

const reduce = combineReducers({
    categories,
    products,
    form,
    user,
    cart
})

export default reduce;