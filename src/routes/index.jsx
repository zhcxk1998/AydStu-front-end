import React from 'react'
import {
  Switch, Redirect, Route,
} from 'react-router-dom'

import PrivateRoute from '../components/PrivateRoute'
import { Login, Register, Home } from '../pages'


const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />

    <PrivateRoute exact path="/home" component={Home} />

    <Redirect exact from="/" to="/home" />
  </Switch>
)

export default Routes
