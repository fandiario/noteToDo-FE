import React, { useEffect, useState } from "react"

// Redux
import {connect} from "react-redux"
import {getDataUser} from "../Redux/Actions/UserActions"
import {getDataTask, updateTaskDone, deleteTask} from "../Redux/Actions/TodoActions"

// Add New Task
import CreateTaskModal from "../Components/CreateTaskModal"

// // Alert
// import { Alert } from 'reactstrap'


// SweetAlert
import swal from "sweetalert"

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const Dashboard = ({getDataUser, updateTaskDone, deleteTask, getDataTask, user, todo}) => {

    useEffect (() => {
        onGetDataUser ()
        onGetDataTask ()
    }, [])

    // const [showAlert, setshowAlert] = useState(false)

    // const [dataUser, setDataUser] = useState (null)

    const onGetDataUser = () => {
        let token = localStorage.getItem ("token")
        getDataUser (token)
    }

    const onGetDataTask = () => {
        let token = localStorage.getItem ("token")
        let data = {token}

        getDataTask (data)
    }

    const onLogOut = () => {
        swal({
            title: "Log Out?",
            text: "Are you sure you want to log out ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willLogOut) => {
            if (willLogOut) {
                swal({
                    title: "Success",
                    text: "Successfully logged out.",
                    icon: "success",
                    timer: 3000
                })

              localStorage.removeItem ("token")
              window.location = "/"
            } 
          })

          .catch ((err) => {
              console.log (err)
          })
    }

    const onUpdateTaskDone = (id) => {
        // console.log (id)
        updateTaskDone (id)
        onGetDataTask ()
    }

    const onDeleteTask = (id) => {
        deleteTask(id)
        onGetDataTask ()
    }

    if (user.dataUser === null || todo.data === null) {
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
            {/* Logo */}
            <div className="col-12 my-3">
                <h1 className="todo-bg-primary todo-border-dark todo-border-rad5 p-1 shadow" style={{width: "225px"}}>
                    Get It Done
                </h1>
                
                <h5 className="todo-fs-italic">
                    Your personal task and project manager
                </h5>
            </div>

            {/* Sidebar */}
            <div className="row my-5">
                <div className="col-2 d-flex justify-content-center align-content-center" style={{height: "480px"}}>
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
                                <button type="button" className="btn todo-btn-primary my-3">Boards</button>
                            </div>
                            <div>
                                <button type="button" className="btn todo-btn-primary my-3">Templates</button>
                            </div>
                            <div>
                                <button type="button" className="btn todo-btn-primary my-3">Workspaces</button>
                            </div>
                            <div>
                                <button type="button" className="btn todo-btn-primary my-3">Setting</button>
                            </div>
                            <div>
                                <button type="button" className="btn todo-btn-dark my-3 shadow" onClick={onLogOut}>Log Out</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                {/* Dashboard */}
                <div className="col-9">
                    
                    <div className="col-12 mr-3">
                        <div>
                            <CreateTaskModal></CreateTaskModal>
                        </div>

                        <div className="my-3">
                            {
                                todo.message ?
                                    <div className="col-12 alert todo-bg-primary todo-colour-dark todo-fs-bold todo-border-dark todo-border-rad5" role="alert">
                                        <div className="text-center">
                                            {todo.message}
                                        </div>
                                    </div>
                                :
                                    null    
                            }
                        </div>

                        {
                            todo.data.length === 0 ?

                                <div className="col-12">
                                    <h3>
                                        Your Task List is still empty
                                    </h3>
                                </div>

                            :
                                <div>
                                    {
                                        todo.data.map ((el, i) => {
                                            return (
                                                <div key={i}>
                                                    <div className="col-12 my-3 todo-border-dark todo-border-rad5 shadow todo-bg-primary">
                                                        <div className="col-2 mt-2 text-center todo-fs-bold todo-border-dark todo-border-rad5 todo-bg-dark todo-colour-light">
                                                            {el.date}
                                                        </div>
                                                        {
                                                            el.taskLists.map((element, index) => {
                                                                return (
                                                                    <div key={index} className="col-8 todo-btn-light todo-border-dark todo-border-rad5 my-3 shadow">
                                                                        <div className="row d-flex justify-content-between">
                                                                            <div className="row ml-3 mt-1 d-flex align-items-center">
                                                                                <h3 className="mr-2">
                                                                                    {element.title}
                                                                                </h3>

                                                                                {
                                                                                    element.status === 0 ?
                                                                                        <div className="todo-bg-primary todo-border-dark todo-border-rad5 todo-fs-bold px-1" style={{height: "30px"}} >
                                                                                            Status: On Going
                                                                                        </div>
                                                                                    :
                                                                                        <div className="todo-bg-success todo-border-dark todo-border-rad5 todo-fs-bold px-1" style={{height: "30px"}}>
                                                                                            Status: Done
                                                                                        </div>
                                                                                }
                                                                            </div>
                                                                           

                                                                            <div className="mr-3 mt-1">
                                                                                <button className="btn todo-btn-primary todo-border-dark todo-border-rad5 mr-2">
                                                                                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                                                                </button>
                                                                                <button className="btn todo-btn-dark todo-border-dark todo-border-rad5" onClick={() => onDeleteTask(element.id)}>
                                                                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                                                                </button>
                                                                            </div>
                                                                        </div>

                                                                        

                                                                        <div className="todo-fs-italic">
                                                                            Time : {element.time}
                                                                        </div>

                                                                        <div className="row d-flex justify-content-between my-2">
                                                                            <div className="mb-2 ml-3 flex-wrap">
                                                                                Description : {element.description}
                                                                            </div>
                                                                            {
                                                                                element.status === 0 ?
                                                                                    <button className="btn todo-btn-success todo-border-dark todo-border-rad5 mr-3 mb-3 todo-fs-bold" onClick={() => onUpdateTaskDone(element.id)}>
                                                                                        <FontAwesomeIcon icon={faCheck} className="mx-1"></FontAwesomeIcon>
                                                                                        Done
                                                                                    </button>
                                                                                :
                                                                                    null
                                                                            }
                                                                            
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                        
                                                    </div>

                                                    
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                        }

                        

                    </div>

                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        todo: state.todo
    }
}

const mapDispatchToProps = {
    getDataUser, getDataTask, updateTaskDone, deleteTask
}

export default connect (mapStateToProps, mapDispatchToProps) (Dashboard)