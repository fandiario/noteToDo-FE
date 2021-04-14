let initialState = {
    token: null,
    message: null,
    loading: false,
    isRedirect: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOADING" :
            return {...state, loading: true}
        case 'AUTH_SUCCESS':
            return {...state, message: action.payload, loading: false}
        case 'AUTH_ERROR':
            return {...state, message: action.payload, loading: false}
        case 'LOGIN_SUCCESS':
            return{...state, token: action.payload, isRedirect: true}
        case 'LOGIN_ERROR':
            return{...state, message: action.payload}
        
        default:
            return state
    }
}

export default userReducer