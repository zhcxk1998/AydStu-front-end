import React from 'react'
import {
  Switch, withRouter, Redirect,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

// import { DashBoard } from '../../pages'
import DashBoard from '../../pages/DashBoard'

import './index.scss'

const Test = () => (
  <div>123</div>
)

@withRouter
class ContentMain extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/index/dashboard" component={DashBoard} />
        <PrivateRoute exact path="/index/test" component={Test} />

        <Redirect exact from="/index" to="/index/dashboard" />
      </Switch>
    )
  }
}

export default ContentMain
