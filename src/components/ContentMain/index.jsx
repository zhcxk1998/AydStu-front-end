import React from 'react'
import {
  Switch, withRouter, Redirect,
} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

import { DashBoard, Community, Talk, Course, Rank,ReadingTask } from '../../pages'

import './index.scss'

@withRouter
class ContentMain extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/index/dashboard" component={DashBoard} />
        <PrivateRoute exact path="/index/community" component={Community} />
        <PrivateRoute exact path="/index/rank" component={Rank} />
        <PrivateRoute exact path="/index/talk" component={Talk} />
        <PrivateRoute exact path="/index/course" component={Course} />
        <PrivateRoute exact path="/index/readingtask" component={ReadingTask} />
        <Redirect exact from="/index" to="/index/dashboard" />
      </Switch>
    )
  }
}

export default ContentMain
