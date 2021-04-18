import React, { useRef, useState } from "react"

// Redux
import {connect} from "react-redux"
import {onForgotPassword} from "../Redux/Actions/UserActions"

// Image
import questionPict from "../Supports/Assets/undraw_searching_p5ux.svg"
import errorPict from "../Supports/Assets/undraw_cancel_u1it.svg"
import congratsPict from "../Supports/Assets/undraw_well_done_i2wr.svg"


const ForgotPassword = ({onForgotPassword, user}) => {
    const [dataError, setDataError] = useState (null)
    const emailUser = useRef (null)

    const sendNewPass = () => {
        let emailForgot = emailUser.current.value 
        console.log (emailForgot)
        
        if (emailForgot === null) throw setDataError ("Please insert your email")

        onForgotPassword(emailForgot)
    
    }

    if (user.message === null && dataError === null) {
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

                <div className="col-12 d-flex justify-content-center">
                    <div className="col-6 text-center todo-bg-primary todo-border-dark todo-border-rad5 shadow py-3">
                        <h1>
                            New Password ?
                        </h1>
                        <img src={questionPict} className="my-3" style={{width:"auto", height:"210px"}} alt="congratsPict"></img>
                        
                        <h5 className="mb-3">
                            Please enter your email 
                        </h5>
                        <input type="text" className="form-control mb-3" placeholder="xxx@xxxx.com" ref={emailUser}/>
                        <input type="button" className="btn todo-btn-dark shadow mb-3" onClick={sendNewPass} value="Confirm" disabled={user.loading}/>
                    </div>
                </div>

            </div>
        )
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
                dataError === true ?

                    <div className="col-12 d-flex justify-content-center">
                        <div className="col-6 text-center todo-bg-primary todo-border-dark todo-border-rad5 shadow py-3">
                            <h1>
                                Error
                            </h1>
                            <img src={errorPict} className="my-3" style={{width:"auto", height:"210px"}} alt="congratsPict"></img>
                            <h5>
                            {dataError}
                            </h5>
                        </div>
                    </div>
                :
                    null
            }

            {
                user.error === true ?

                    <div className="col-12 d-flex justify-content-center">
                        <div className="col-6 text-center todo-bg-primary todo-border-dark todo-border-rad5 shadow py-3">
                            <h1>
                                Error
                            </h1>
                            <img src={errorPict} className="my-3" style={{width:"auto", height:"210px"}} alt="congratsPict"></img>
                            <h5>
                            {user.message}
                            </h5>
                        </div>
                    </div>
                :
                <div className="col-12 d-flex justify-content-center">
                    <div className="col-6 text-center todo-bg-primary todo-border-dark todo-border-rad5 shadow py-3">
                        <h1>
                            Congratulation
                        </h1>
                        <img src={congratsPict} className="my-3" style={{width:"auto", height:"210px"}} alt="congratsPict"></img>
                        <h5>
                        {user.message}
                        </h5>
                        <p>
                            Please wait for 1 x 24 hours. If you haven't received your email in 1 x 24 hours, please contact us at our contact center.
                        </p>
                    </div>
                </div>
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    onForgotPassword
}

export default connect (mapStateToProps, mapDispatchToProps) (ForgotPassword)