import React from 'react'
import {
  Switch, withRouter, Redirect,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

import { DashBoard } from '../../pages'

import './index.scss'

@withRouter
class ContentMain extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/index/dashboard" component={DashBoard} />

        <Redirect exact from="/index" to="/index/dashboard" />
      </Switch>
    )
  }
}

export default ContentMain
