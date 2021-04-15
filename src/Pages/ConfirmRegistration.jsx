import React, {useEffect} from "react"

// Redux
import { connect } from "react-redux"

// Image
import congratsPict from "../Supports/Assets/undraw_well_done_i2wr.svg"
import errorPict from "../Supports/Assets/undraw_cancel_u1it.svg"

const ConfirmRegistration = ({user}) => {
    // useEffect (() => {
    //     console.log (user)
    // },[])

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
                user.isRegistered === true ?
                    <div className="col-12 d-flex justify-content-center">
                        <div className="col-6 text-center todo-bg-primary todo-border-dark todo-border-rad5 shadow py-3">
                            <h1>
                                Congratulation !
                            </h1>
                            <img src={congratsPict} className="my-3" style={{width:"auto", height:"210px"}} alt="congratsPict"></img>
                            <p>
                                "Registration user is success. Please check your email in 1 x 24 hours"
                            </p>
                        </div>
                    </div>
                :
                    <div className="col-12 d-flex justify-content-center">
                        <div className="col-6 text-center todo-bg-primary todo-border-dark todo-border-rad5 shadow py-3">
                            <h1>
                                Error
                            </h1>
                            <img src={errorPict} className="my-3" style={{width:"auto", height:"210px"}} alt="congratsPict"></img>
                            <h5>
                               {user.message}
                            </h5>
                            <p>
                                Please check your email format or email is registered. If the problem persist, please check for another 1 x 24 hours
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

export default connect (mapStateToProps, "")(ConfirmRegistration)