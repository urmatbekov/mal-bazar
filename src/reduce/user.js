const initialState = {
    data: {},
    isAuthenticate: false,
    error:null
}

const user = (state = initialState, action) => {

    if(action.type === "SET_USER") {
        return {error:null, data: action.payload, isAuthenticate: true }
    } else if (action.type === "SET_ERROR") {
        return {error:action.payload, data: {}, isAuthenticate: false }
    }

    return state
}

const setUser = (user) => {
    return {
        type: "SET_USER",
        payload: user
    }
}

const setError = (err) => {
    return {
        type: "SET_ERROR",
        payload: err
    }
}

export {
    setUser,
    setError
}

export default user;