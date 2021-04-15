import React from "react"
import {BrowserRouter as Router, Switch, Route, } from "react-router-dom"

// Pages
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import ConfirmationLink from "./Pages/EmailConfirmationLink"
import ConfirmationCode from "./Pages/EmailConfirmationCode"
import ConfirmRegistration from "./Pages/ConfirmRegistration"
import ForgotPassword from "./Pages/ForgotPassword"

// Redux
import {applyMiddleware, createStore} from "redux"
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import allReducer from "./Redux/Reducers/index"

// CSS
import "./Supports/Stylesheets/Utility.css"

const store = createStore(allReducer, applyMiddleware (thunk))

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path = "/" component={Login}></Route>
          <Route path = "/confirmation/code/:idUser/:passwordUser" component={ConfirmationCode}></Route>
          <Route path = "/confirmation/link/:idUser/:passwordUser" component={ConfirmationLink}></Route>
          <Route path = "/dashboard" component={Dashboard}></Route>
          <Route path = "/confirm-registration" component={ConfirmRegistration}></Route>
          <Route path = "/forgot-password" component={ForgotPassword}></Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
