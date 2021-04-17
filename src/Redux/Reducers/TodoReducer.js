let initialstate = {
    loading: false,
    data: null,
    message: null
}

const todoReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "LOADING" :
            return {...state, loading: true}

        case "TODO_SUCCESS":
            return {...state, data: action.payload, loading: false}
        
        case "TODO_FAIL":
            return {...state, message: action.payload, loading: false}

        default :
            return state
    }
}

export default todoReducer