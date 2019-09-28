import React from 'react'
import {
  Switch, Redirect, Route,
} from 'react-router-dom'

import { Login, Register, Home } from '../pages'

const Routes = () => (
  <Switch>
    <Route exact path="/home" component={Home} />

    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />

    <Redirect exact from="/" to="/home" />
  </Switch>
)

export default Routes
