import axios from 'axios'
import linkAPITodo from "../../Supports/Constants/LinkAPITodo"
// import swal from 'sweetalert'


export const getDataTask = (data) => {
    return (dispatch) => {
        // let data = {
        //     token: input
        // }

        axios.post (linkAPITodo + "/get-data-task", data)

        .then ((res) => {
            // console.log (res.data.data)
            dispatch ({
                type: "TODO_SUCCESS",
                payload: res.data.data
            })
        })

        .catch ((err) => {
            console.log (err.response.data.message)
            dispatch ({
                type: "TODO_FAIL",
                payload: err.response.data.message
            })
        })
    }
} 


export const createTask = (dataToSend) => {
    return (dispatch) => {
        let data = {
            token: dataToSend.token
        }
        // console.log (data)

        axios.post (linkAPITodo + "/create-task", dataToSend)

        .then ((res) => {
            // console.log (res)
            // getDataTask (data)
            axios.post (linkAPITodo + "/get-data-task", data)

            .then ((response) => {
                // console.log (response.data.data)
                dispatch ({
                    type: "TODO_SUCCESS",
                    payload: response.data.data
                })
            })

            .catch ((error) => {
                console.log (error)
                dispatch ({
                    type: "TODO_FAIL",
                    payload: error.response.data.message
                })
            })
        })

        .catch ((err) => {
            console.log (err)
            dispatch ({
                type: "TODO_FAIL",
                payload: err.response.data.message
            })
        })
    }
}

export const updateTaskDone = (id) => {
    return (dispatch) => {
        // console.log (id)
        axios.patch (linkAPITodo + "/update-task-done", {id})

        .then ((res) => {
            if (res.data.error === false) {
                dispatch ({
                    type: "TODO_UPDATE_DONE",
                    payload: res.data.message
                })

            } else if (res.data.error === true) {
                dispatch ({
                    type: "TODO_UPDATE_FAIL",
                    payload: res.data.message
                })
            }
        })

        .catch ((err) => {
            console.log (err)
            dispatch ({
                type: "TODO_UPDATE_FAIL",
                payload: err.response.data.message
            })
        })

    }
}

export const deleteTask = (id) => {
    // console.log (id)
    return (dispatch) => {
        axios.post (linkAPITodo + "/delete-task", {id})

        .then ((res) => {
            if (res.data.error === false){
                dispatch ({
                    type: "TODO_DELETE_SUCCESS",
                    payload: res.data.message
                })

            } else if (res.data.error === true){
                dispatch ({
                    type: "TODO_DELETE_FAIL",
                    payload: res.data.message
                })
            }
        })

        .catch ((err) => {
            console.log (err)
            dispatch ({
                type: "TODO_DELETE_FAIL",
                payload: err.response.data.message
            })
        })
    }
}

export const getDataPerTask = (id) => {
    return (dispatch) => {
        axios.post (linkAPITodo + "/get-data-per-task", {id})

        .then ((res) => {
            // console.log (res.data.error)
            // console.log (res.data.message)
            // console.log (res.data.data)

            if (res.data.error === false) {
                dispatch({
                    type: "TODO_GET_DATA_PER_TASK_SUCCESS",
                    payload: res.data.data
                })

            } else {
                dispatch({
                    type: "TODO_GET_DATA_PER_TASK_FAIL",
                    payload: res.data.message
                })
            }
            
        })

        .catch ((err) => {
            console.log (err)

            dispatch ({
                type: "TODO_GET_DATA_PER_TASK_FAIL",
                payload: err.response.data.message
            })
        })
    }
}

export const updateTask = (data) => {
    return (dispatch) => {
        // console.log (data)
        axios.patch (linkAPITodo + "/update-task", data)

        .then ((res) => {
            dispatch ({
                type: "TODO_UPDATE_TASK_SUCCESS",
                payload: res.data.data
            })
        })

        .catch ((err) => {
            console.log (err)

            dispatch ({
                type: "TODO_UPDATE_TASK_FAIL",
                payload: err.response.data.message
            })
        })
    }
}