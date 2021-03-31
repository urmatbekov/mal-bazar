const initialState = {
    data: {},
    isAuthenticate: false
}

const user = (state = initialState, action) => {

    if(action.type === "SET_USER") {
        return { data: action.payload, isAuthenticate: true }
    }

    return state
}

const setUser = (user) => {
    return {
        type: "SET_USER",
        payload: user
    }
}

export {
    setUser,
}

export default user;