import React from 'react'
import { observer, inject } from 'mobx-react'

import './index.scss'

@observer
@inject('test')
class Home extends React.Component {
  render() {
    const { test } = this.props
    return (
      <div>{test.count}</div>
    )
  }
}

export default Home
