import React, { useRef, useState } from 'react'

// Modals
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

// Redux
import {connect} from "react-redux"
import {createTask, getDataTask} from "../Redux/Actions/TodoActions"

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const CreateTask = ({createTask, getDataTask, user, todo}) => {
    const [showModal, setShowModal] = useState (false)
    const inputTitle = useRef (null)
    const inputDesc = useRef (null)
    const inputDate = useRef (null)

    const onSubmitCreate = () => {
        let inputTitleTask = inputTitle.current.value
        let inputDescTask = inputDesc.current.value
        let inputDateTask = inputDate.current.value
        let inputToken = localStorage.getItem ("token")
        // console.log (inputToken)
        
        let dataToSend = {
            title: inputTitleTask,
            description: inputDescTask,
            date : inputDateTask,
            token : inputToken 
        }

        createTask (dataToSend)
        setShowModal (false)
        // getDataTask (localStorage.getItem ("token"))
        
    }


    return (
        <div>
            <button type="button" className="btn todo-btn-primary todo-border-dark todo-border-rad5 todo-fs-bold shadow" onClick={() => setShowModal(true)}>
                <FontAwesomeIcon icon={faPlus} className="mx-1"></FontAwesomeIcon>
                Add New Task
            </button>

            <Modal toggle={() => setShowModal(false)} isOpen={showModal} className="todo-border-dark todo-border-rad5 shadow">
                <ModalHeader className="todo-bg-dark todo-colour-light todo-border-dark todo-border-rad5">
                    Add New Task
                </ModalHeader>

                <ModalBody className="todo-bg-primary todo-colour-dark todo-border-dark todo-border-rad5">
                    <form>
                        <div className="form-group">
                            <label htmlFor="inputTitle" className="todo-fs-bold">Title</label>
                            <input type="text" className="form-control" ref={inputTitle}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputDesc" className="todo-fs-bold">Description</label>
                            <input type="text" className="form-control" ref={inputDesc}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputDate" className="todo-fs-bold">Date</label>
                            <input type="datetime-local" className="form-control" ref={inputDate}/>
                        </div>
                    </form>
                    {
                        todo.message ?
                            <div className="text-center">
                                {todo.message}
                            </div>
                        :
                            null
                    }
                </ModalBody>

                <ModalFooter className="todo-bg-primary todo-colour-light todo-border-dark todo-border-rad5">
                    <button type="button" className="btn todo-btn-dark todo-border-dark todo-border-rad5 shadow" onClick={onSubmitCreate}>
                        <FontAwesomeIcon icon={faPlus} className="mx-1"></FontAwesomeIcon>
                        Add Task
                    </button>
                </ModalFooter>
            </Modal>
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
    createTask, getDataTask
}

export default connect (mapStateToProps, mapDispatchToProps) (CreateTask)