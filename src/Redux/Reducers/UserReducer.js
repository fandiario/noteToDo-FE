let initialState = {
    token: null,
    message: null,
    loading: false,
    error: null,
    dataUser: null,
    isRedirect: false,
    isRegistered: false,
    isLogin: false
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOADING" :
            return {...state, loading: true}

        case 'AUTH_SUCCESS':
            return {...state, message: action.payload, loading: false, error: false, isRegistered: true, isLogin: false}

        case 'AUTH_ERROR':
            return {...state, message: action.payload, loading: false, error: true}

        case 'LOGIN_SUCCESS':
            return{...state, token: action.payload, isRedirect: true, error: false, isRegistered: false, isLogin: true}

        case 'LOGIN_ERROR':
            return{...state, message: action.payload, error: true}

        case "NEW_PASS_SUCCESS":
            return {...state, message: action.payload, loading: false, error: false}

        case "NEW_PASS_FAIL":
            return {...state, message: action.payload, loading: false, error: true}

        case "GET_DATA_USER_SUCCESS":
            return {...state, dataUser: action.payload, loading: false, error: false}

        case "GET_DATA_USER_FAIL":
            return {...state, message: action.payload, loading: false, error: true}
        
        
        default:
            return state
    }
}

export default userReducer