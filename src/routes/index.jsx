import React from 'react'
import {
  Switch, Redirect, Route,
} from 'react-router-dom'

import PrivateRoute from '../components/PrivateRoute'
import { Login, Register, Index } from '../pages'


const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />

    <PrivateRoute path="/index" component={Index} />

    <Redirect exact from="/" to="/index" />
  </Switch>
)

export default Routes
