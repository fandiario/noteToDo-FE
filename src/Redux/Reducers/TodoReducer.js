let initialstate = {
    loading: false,
    data: null,
    dataPerTask: null,
    message: null,
    isDone: false,
}

const todoReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "LOADING" :
            return {...state, loading: true}

        case "TODO_SUCCESS":
            return {...state, data: action.payload, loading: false}
        
        case "TODO_FAIL":
            return {...state, message: action.payload, loading: false}
        
        case "TODO_UPDATE_DONE":
            return {...state, isDone: true, loading: false, message: action.payload}

        case "TODO_UPDATE_FAIL":
            return {...state, isDone: false, loading: false, message: action.payload}

        case "TODO_DELETE_SUCCESS":
            return {...state, loading: false, message: action.payload}

        case "TODO_DELETE_FAIL":
            return {...state, loading: false, message: action.payload}

        case "TODO_GET_DATA_PER_TASK_SUCCESS":
            return {...state, loading: false, dataPerTask: action.payload}    
            
        case "TODO_GET_DATA_PER_TASK_FAIL":
            return {...state, loading: false, message: action.payload}

        case "TODO_UPDATE_TASK_SUCCESS":
            return {...state, loading: false, message: action.payload}
        
        case "TODO_UPDATE_TASK_FAIL":
            return {...state, loading: false, message: action.payload}
        

        default :
            return state
    }
}

export default todoReducer