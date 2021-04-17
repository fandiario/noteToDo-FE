import axios from "axios"
import linkAPI from "../../Supports/Constants/LinkAPI"
// import swal from 'sweetalert'

export const onUserRegister = (dataInput) => {
    return (dispatch) => {
        dispatch ({
            type: "LOADING"
        })

        axios.post (linkAPI + "/register", {email: dataInput.email, password: dataInput.password})

        .then ((res) => {
            // let swalSuccess = swal({
            //     title: "Success",
            //     text: res.data.message,
            //     icon: "success",
            // })
            dispatch ({
                type: "AUTH_SUCCESS",
                payload: res.data.message
            })
        })

        .catch ((err) => {
            // let swalError = swal({
            //     title: "Error",
            //     text: err.message,
            //     icon: "error",
            // })
            dispatch ({
                type: "AUTH_ERROR",
                payload: err.message
            })
        })
    }
}

export const onUserLogin = (dataInput) => {
    return (dispatch) => {
        dispatch ({
            type: "LOADING"
        })

        axios.post (linkAPI + "/login", {email: dataInput.email, password: dataInput.password})
        
        .then ((res) => {
            // let swalSuccess = swal({
            //     title: "Success",
            //     text: res.data.message,
            //     icon: "success",
            // })

            if (res.data.error === false) {
                localStorage.setItem ("token", res.data.data.token)
                dispatch ({
                    type: "LOGIN_SUCCESS",
                    payload: res.data.data.token   
                })

            } else if (res.data.error === true) {
                dispatch ({
                    type: "LOGIN_ERROR",
                    payload: res.data.message   
                })

                
            }

            
        }) 

        .catch ((err) => {
            // let swalError = swal({
            //     title: "Error",
            //     text: err.message,
            //     icon: "error",
            // })
            dispatch ({
                type: "LOGIN_ERROR",
                payload: err.response.data.message
            })
        })
    }
}

export const onForgotPassword = (inputEmail) => {
    return (dispatch) => {
        
        dispatch ({
            type: "LOADING"
        })

        axios.patch (linkAPI + "/forgot-password", {inputEmail})

        .then ((res) => {
            console.log (res)
            if (res.data.error === false) {
                dispatch ({
                    type: "NEW_PASS_SUCCESS",
                    payload: res.data.message
                })

            } else if (res.data.error === true) {
                dispatch ({
                    type: "NEW_PASS_FAIL",
                    payload: res.data.message
                })
            }
        })

        .catch ((err) => {
            console.log (`${err.message}`)
            dispatch ({
                type: "NEW_PASS_FAIL",
                payload: err.message
            })
        })
    }

    
}

export const onConfirmAccount = () => {
    
}

export const getDataUser = (token) => {
    return (dispatch) => {
        // console.log (token)

        axios.post (linkAPI + "/get-data-user", {token})

        .then ((res)=> {
            // console.log (res)
            if (res.data.error === false) {
                dispatch ({
                    type: "GET_DATA_USER_SUCCESS",
                    payload: res.data.dataUser
                })

            } else if (res.data.error === true) {
                dispatch ({
                    type: "GET_DATA_USER_FAIL",
                    payload: res.data.message
                })
            }
        })

        .catch ((err) => {
            console.log (err)
            dispatch ({
                type: "GET_DATA_USER_FAIL",
                payload: err.message
            }) 
        })

    }
}


