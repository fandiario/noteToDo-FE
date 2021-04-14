import React, { useState, useRef } from "react"

// Modals
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

// Validator 
import validator from "validator"

// Redux
import {connect} from "react-redux"
import {onUserLogin, onUserRegister} from "../Redux/Actions/UserActions"

// Image
import frontPict from "../Supports/Assets/undraw_Build_wireframe_re_ln7g.svg"

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle, faFacebook} from"@fortawesome/free-brands-svg-icons"

const Login = ({onUserRegister, onUserLogin, user}) => {

    const [showModal, setShowModal] = useState (false)
    const [dataState, setDataState] = useState ({
        error: null,
        loading: false
    })
    const emailLogin = useRef (null)
    const passwordLogin = useRef (null)
    const emailRegister = useRef (null)
    const passwordRegister = useRef (null)

    const onSubmitRegister = () => {
        let regEmail = emailRegister.current.value
        let regPass = passwordRegister.current.value

        let dataToSend = {
            email: regEmail,
            password: regPass
        }

        // console.log (dataToSend)
        if (!regEmail || !regPass) throw setDataState ({error: "Empty Data Field Detected", loading: false})
        if (!(validator.isEmail(regEmail))) throw setDataState ({error: "Email is not valid", loading: false})
        if (regPass.length < 6 ) throw setDataState ({error:"Password's min. length is 6 characters", loading: false})

        onUserRegister (dataToSend)

    }

    const onSubmitLogin = () => {
        let loginEmail = emailLogin.current.value
        let loginPass = passwordLogin.current.value

        let dataToSend = {
            email: loginEmail,
            password: loginPass
        }

        if (!loginEmail || !loginPass) throw setDataState ({error: "Empty Data Field Detected", loading: false})

        onUserLogin (dataToSend)
        // console.log (user)
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
            
            <div className="row">
                <div className="col-5 my-3 ml-3 d-flex justify-content-center align-self-center">
                    <img src= {frontPict} style={{width:"auto", height:"210px"}} alt="fontPict"></img>
                </div>

                {/* <div className="col-1 my-3">
                    <div className="todo-border-dark todo-bg-dark" style={{height: "100%", width: "1px"}}></div>
                </div> */}

                <div className="col-5 my-3 todo-bg-primary todo-border-dark todo-border-rad5 shadow">
                    <form>
                        <h5> Login </h5>
                        <div className="form-group">
                            <label htmlFor="emailLogin">Email address</label>
                            {/* <input type="email" className="form-control"/> */}
                            <input type="email" className="form-control" ref={emailLogin}/>
                            <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordLogin">Password</label>
                            {/* <input type="password" className="form-control" /> */}
                            <input type="password" className="form-control"  ref={passwordLogin}/>
                        </div>

                        <button className="btn todo-btn-dark shadow" onClick={onSubmitLogin} disabled={dataState.loading}>Log In</button>
                    </form>

                    {
                        user.message ?
                            <div className="col-12 d-flex flex-column align-items-center my-1">
                                {user.message}
                            </div>
                        :
                            null
                    }

                    {
                        dataState.error ?
                            <div className="col-12 d-flex flex-column align-items-center my-1">
                                {dataState.error}
                            </div>
                        :
                            null

                    }                   

                    <div className="col-12 d-flex flex-column align-items-center mt-3 mb-1">
                        <div>
                            Don't have an account yet ? <button className="btn todo-btn-dark shadow" onClick={() => setShowModal({showModal: true})}>Register Now</button>
                        </div>
                    </div>

                    <div className="todo-border-dark todo-bg-dark my-3" style={{height: "1px"}}></div>
                    
                    <div className="col-12 d-flex flex-column align-items-center mb-3">
                        <div>
                            Or Log In with
                        </div>

                        <div className="my-2">
                            <button className="btn todo-btn-light todo-border-dark shadow">
                                <FontAwesomeIcon icon={faGoogle} className="mr-1"></FontAwesomeIcon>
                                Google
                            </button>
                        </div>

                        <div>
                            <button className="btn todo-btn-secondary todo-border-dark shadow">
                                <FontAwesomeIcon icon={faFacebook} className="mr-1"></FontAwesomeIcon>
                                Facebook
                            </button>
                        </div>
                        
                    </div>
                    
                </div>
            </div>

            {/* Modal */}
            <Modal toggle={() => setShowModal(false)} isOpen={showModal} className="todo-border-dark todo-border-rad5 shadow">
                <ModalHeader className="todo-bg-dark todo-colour-light">
                    Register
                </ModalHeader>
                <ModalBody className="todo-bg-primary todo-colour-dark">
                    <form>
                        <div className="form-group">
                            <label htmlFor="emailRegister">Email address</label>
                            <input type="email" className="form-control" ref={emailRegister}/>
                            <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordRegister">Password</label>
                            <input type="password" className="form-control" ref={passwordRegister} />
                        </div>

                        <button className="btn todo-btn-dark shadow" onClick={onSubmitRegister} disabled={dataState.loading}>Register</button>
                    </form>
                </ModalBody>

                <ModalFooter className="todo-bg-primary todo-colour-dark">
                    {
                        user.message ?
                            <div className="col-12 d-flex flex-column align-items-center my-1">
                                {user.message}
                            </div>
                        :
                            null
                    }

                    {
                        dataState.error ?
                            <div className="col-12 d-flex flex-column align-items-center my-1">
                                {dataState.error}
                            </div>
                        :
                            null

                    }
                </ModalFooter>

            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    onUserLogin, onUserRegister
}

export default connect (mapStateToProps, mapDispatchToProps) (Login)