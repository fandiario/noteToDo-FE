import React, { useEffect, useState } from "react"

// Redux
import {connect} from "react-redux"
import {getDataUser} from "../Redux/Actions/UserActions"

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const Dashboard = ({getDataUser, user}) => {

    useEffect (() => {
        onGetDataUser ()
    }, [])

    // const [dataUser, setDataUser] = useState (null)

    const onGetDataUser = () => {
        let token = localStorage.getItem ("token")
        getDataUser (token)
    }

    if (user.dataUser === null) {
        return (
            <div>
                 <div className="col-12 my-3">
                    <h1 className="todo-bg-primary todo-border-dark todo-border-rad5 p-1 shadow" style={{width: "225px"}}>
                        Get It Done
                    </h1>
                    
                    <h5 className="todo-fs-italic">
                        Your personal task and project manager
                    </h5>
                </div>
                <div className="row">
                    Loading...
                </div>
            </div>
        )
    }

    return (

        <div>
            <div className="col-12 my-3">
                <h1 className="todo-bg-primary todo-border-dark todo-border-rad5 p-1 shadow" style={{width: "225px"}}>
                    Get It Done
                </h1>
                
                <h5 className="todo-fs-italic">
                    Your personal task and project manager
                </h5>
            </div>

            <div className="row my-5">
                <div className="col-2 d-flex justify-content-center align-content-center" style={{height: "250px"}}>
                    <div className="col-12 ml-3 todo-bg-primary todo-colour-dark todo-border-dark todo-border-rad5 shadow">
                        <div>
                            <h3>
                                Welcome
                            </h3>
                        </div>
                
                        <div>
                            {user.dataUser.email}
                        </div>
                        <div className="todo-border-dark todo-bg-dark my-3" style={{height: "1px"}}></div>
                        <div>
                            <div>
                                Boards
                            </div>
                            <div>
                                Templates
                            </div>
                            <div>
                                Workspaces
                            </div>
                            <div>
                                Setting
                            </div>
                            <div>
                                Log Out
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div className="col-9">
                    <div className="col-12 mr-3">
                        <div>
                            <button type="button" className="btn todo-btn-primary todo-border-dark todo-border-rad5 shadow todo-fs-bold">
                                <FontAwesomeIcon icon={faPlus} className="mr-1"></FontAwesomeIcon>
                                Add New Task
                            </button>
                        </div>

                        <div className="col-12 my-3 todo-border-dark todo-border-rad5 shadow todo-bg-primary">
                            <div className="col-2 mt-2 text-center todo-fs-bold todo-border-dark todo-border-rad5 todo-bg-dark todo-colour-light">
                                To Do
                            </div>

                            <div className="col-8 todo-btn-light todo-border-dark todo-border-rad5 my-3 shadow">
                                <div className="row d-flex justify-content-between">
                                    <h3 className="ml-3 mt-1">
                                        Title
                                    </h3>

                                    <div className="mr-3 mt-1">
                                        <button className="btn todo-btn-primary todo-border-dark todo-border-rad5 mr-2">
                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        </button>
                                        <button className="btn todo-btn-danger todo-border-dark todo-border-rad5">
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="todo-fs-italic">
                                    Date 
                                </div>
                                <div className="mb-2">
                                    Description
                                </div>
                            </div>

                            <div className="col-8 todo-btn-light todo-border-dark todo-border-rad5 my-3 shadow">
                                <div className="row d-flex justify-content-between">
                                    <h3 className="ml-3 mt-1">
                                        Title
                                    </h3>

                                    <div className="mr-3 mt-1">
                                        <button className="btn todo-btn-primary todo-border-dark todo-border-rad5 mr-2">
                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        </button>
                                        <button className="btn todo-btn-danger todo-border-dark todo-border-rad5">
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="todo-fs-italic">
                                    Date 
                                </div>
                                <div className="mb-2">
                                    Description
                                </div>
                            </div>

                            
                        </div>

                    </div>


                    <div className="col-12 mr-3">
                        <div className="col-12 my-3 todo-border-dark todo-border-rad5 shadow todo-bg-primary">
                            <div className="col-2 mt-2 text-center todo-fs-bold todo-border-dark todo-border-rad5 todo-bg-dark todo-colour-light">
                                Doing
                            </div>

                            <div className="col-8 todo-btn-light todo-border-dark todo-border-rad5 my-3 shadow">
                                <div className="row d-flex justify-content-between">
                                    <h3 className="ml-3 mt-1">
                                        Title
                                    </h3>

                                    <div className="mr-3 mt-1">
                                        <button className="btn todo-btn-primary todo-border-dark todo-border-rad5 mr-2">
                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        </button>
                                        <button className="btn todo-btn-danger todo-border-dark todo-border-rad5">
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="todo-fs-italic">
                                    Date 
                                </div>
                                <div className="mb-2">
                                    Description
                                </div>
                            </div>

                            <div className="col-8 todo-btn-light todo-border-dark todo-border-rad5 my-3 shadow">
                                <div className="row d-flex justify-content-between">
                                    <h3 className="ml-3 mt-1">
                                        Title
                                    </h3>

                                    <div className="mr-3 mt-1">
                                        <button className="btn todo-btn-primary todo-border-dark todo-border-rad5 mr-2">
                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        </button>
                                        <button className="btn todo-btn-danger todo-border-dark todo-border-rad5">
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="todo-fs-italic">
                                    Date 
                                </div>
                                <div className="mb-2">
                                    Description
                                </div>
                            </div>

                            
                        </div>

                    </div>

                    <div className="col-12 mr-3">
                        <div className="col-12 my-3 todo-border-dark todo-border-rad5 shadow todo-bg-primary">
                            <div className="col-2 mt-2 text-center todo-fs-bold todo-border-dark todo-border-rad5 todo-bg-dark todo-colour-light">
                                Done
                            </div>

                            <div className="col-8 todo-btn-light todo-border-dark todo-border-rad5 my-3 shadow">
                                <div className="row d-flex justify-content-between">
                                    <h3 className="ml-3 mt-1">
                                        Title
                                    </h3>

                                    <div className="mr-3 mt-1">
                                        <button className="btn todo-btn-primary todo-border-dark todo-border-rad5 mr-2">
                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        </button>
                                        <button className="btn todo-btn-danger todo-border-dark todo-border-rad5">
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="todo-fs-italic">
                                    Date 
                                </div>
                                <div className="mb-2">
                                    Description
                                </div>
                            </div>

                            <div className="col-8 todo-btn-light todo-border-dark todo-border-rad5 my-3 shadow">
                                <div className="row d-flex justify-content-between">
                                    <h3 className="ml-3 mt-1">
                                        Title
                                    </h3>

                                    <div className="mr-3 mt-1">
                                        <button className="btn todo-btn-primary todo-border-dark todo-border-rad5 mr-2">
                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        </button>
                                        <button className="btn todo-btn-danger todo-border-dark todo-border-rad5">
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="todo-fs-italic">
                                    Date 
                                </div>
                                <div className="mb-2">
                                    Description
                                </div>
                            </div>

                            
                        </div>

                    </div>

                    <div className="col-12 mr-3">
                        <div className="col-12 my-3 todo-border-dark todo-border-rad5 shadow todo-bg-primary">
                            <div className="col-2 mt-2 text-center todo-fs-bold todo-border-dark todo-border-rad5 todo-bg-dark todo-colour-light">
                                Cancel
                            </div>

                            <div className="col-8 todo-btn-light todo-border-dark todo-border-rad5 my-3 shadow">
                                <div className="row d-flex justify-content-between">
                                    <h3 className="ml-3 mt-1">
                                        Title
                                    </h3>

                                    <div className="mr-3 mt-1">
                                        <button className="btn todo-btn-primary todo-border-dark todo-border-rad5 mr-2">
                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        </button>
                                        <button className="btn todo-btn-danger todo-border-dark todo-border-rad5">
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="todo-fs-italic">
                                    Date 
                                </div>
                                <div className="mb-2">
                                    Description
                                </div>
                            </div>

                            <div className="col-8 todo-btn-light todo-border-dark todo-border-rad5 my-3 shadow">
                                <div className="row d-flex justify-content-between">
                                    <h3 className="ml-3 mt-1">
                                        Title
                                    </h3>

                                    <div className="mr-3 mt-1">
                                        <button className="btn todo-btn-primary todo-border-dark todo-border-rad5 mr-2">
                                            <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        </button>
                                        <button className="btn todo-btn-danger todo-border-dark todo-border-rad5">
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="todo-fs-italic">
                                    Date 
                                </div>
                                <div className="mb-2">
                                    Description
                                </div>
                            </div>

                            
                        </div>

                    </div>



                </div>

            </div>
        </div>
        
        // <div className="container">
        //    <div className="col-12 my-3">
        //         <h1 className="todo-bg-primary todo-border-dark todo-border-rad5 p-1 shadow" style={{width: "225px"}}>
        //             Get It Done
        //         </h1>
                
        //         <h5 className="todo-fs-italic">
        //             Your personal task and project manager
        //         </h5>
        //     </div>

        //     <div className="col-12">
        //         Hello from Dashboard
        //     </div>
        // </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    getDataUser
}

export default connect (mapStateToProps, mapDispatchToProps) (Dashboard)