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
                localStorage.setItem ("my-token", res.data.data.token)
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

export const onConfirmAccount = () => {
    
}
