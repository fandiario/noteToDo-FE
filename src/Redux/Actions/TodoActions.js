import axios from 'axios'
import linkAPITodo from "../../Supports/Constants/LinkAPITodo"


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