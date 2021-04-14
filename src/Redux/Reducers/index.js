import {combineReducers} from 'redux'
import userReducer from './UserReducer'

const allReducer = combineReducers({
    user: userReducer
})

export default allReducer 