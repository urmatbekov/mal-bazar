const initialState = {
    cartItems: [],
}

const cart = (state = initialState, {payload,type}) => {
    if(type === "ADD_TO_CART") {
        
        let itemIndex = state.cartItems.findIndex((cartItem)=>cartItem.product.id===payload.id)
        if (itemIndex === -1){
            const item = {
                count: 1,
                product: { ...payload }
            }
            const cartItems = [...state.cartItems, item]
            return { cartItems }
        } else {
            const cartItems = [...state.cartItems]
            const item = {...cartItems[itemIndex]}
            item.count +=1
            cartItems[itemIndex] = item
            return {cartItems}
        }
    }

    return state
}

const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product
    }
}

export { addToCart }

export default cart;