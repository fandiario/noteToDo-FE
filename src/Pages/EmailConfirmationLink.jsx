import React, {useEffect, useState} from "react"
import axios from "axios"
import linkAPI from "../Supports/Constants/LinkAPI"

// Image
import congratsPict from "../Supports/Assets/undraw_well_done_i2wr.svg"
import errorPict from "../Supports/Assets/undraw_cancel_u1it.svg"

const ConfirmLink = (route) => {

    useEffect (() => {
        onConfirmation ()
    },[])

    const [dataState, setDataState] = useState ({
        error: false,
        message: null
    })

    const onConfirmation = () => {
        let dataToSend = {
            id: route.match.params.idUser,
            password: route.match.params.passwordUser
        }

        // console.log (dataToSend)
        axios.patch (linkAPI + `/confirmation`, {dataToSend})

        .then ((res) => {
            setDataState ({error: res.data.error, message: res.data.message})
        })

        .catch ((err) => {
            console.log (err)
            // setDataState ({error: res.data.error, message: err.message})
        })
    }


    return (
        <div className="container">
            <div className="col-12 my-3">
                <h1 className="todo-bg-primary todo-border-dark todo-border-rad5 p-1 shadow" style={{width: "225px"}}>
                    Get It Done
                </h1>
                
                <h5 className="todo-fs-italic">
                    Your personal task and project manager
                </h5>
            </div>

            {
                // dataState.message === "Your Account is already active" ?
                dataState.error === true ?
                    <div className="col-12 d-flex justify-content-center">
                        <div className="col-6 text-center todo-bg-primary todo-border-dark todo-border-rad5 shadow py-3">
                            <h1>
                                Error
                            </h1>
                            <img src={errorPict} className="my-3" style={{width:"auto", height:"210px"}} alt="congratsPict"></img>
                            <h5>
                               {dataState.message}
                            </h5>
                            
                        </div>
                    </div>
                :
                    <div className="col-12 d-flex justify-content-center">
                        <div className="col-6 text-center todo-bg-primary todo-border-dark todo-border-rad5 shadow py-3">
                            <h1>
                                Congratulation !
                            </h1>
                            <img src={congratsPict} className="my-3" style={{width:"auto", height:"210px"}} alt="congratsPict"></img>
                            <h5>
                                Your Account is now active.
                            </h5>
                            <p>
                                Click the button below to log in
                            </p>
                            <button className="btn todo-btn-dark shadow">Continue Log In</button>
                            {/* <a class="btn todo-btn-dark shadow" href="http://localhost:3000/dashboard/:idUser" role="button">Coninue Log In</a> */}
                        </div>
                    </div>
            }
        </div>
    )
}

export default ConfirmLink