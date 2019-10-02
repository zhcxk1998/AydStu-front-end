import React from 'react'

import {
  Layout, Menu, Icon,
} from 'antd';
import SiderNav from '../../components/SiderNav'

import './index.scss'

const {
  Content, Sider, Footer,
} = Layout;

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
    }
  }

  onCollapse = () => {
    this.setState((preState) => ({
      collapsed: !preState.collapsed,
    }))
  }

  render() {
    const { collapsed } = this.state
    return (
      <Layout hasSider>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} theme="light" className="slider">
          <SiderNav collapsed={collapsed} />
        </Sider>
        <Layout className={`${collapsed ? 'layout-collapsed' : 'layout-unfold'}`}>
          <Content>
            {/* <ContentMain /> */}
            {Array.from({ length: 100 }).map((item) => (
              <div>1</div>
            ))}
          </Content>
          <Footer>
            <div>Footer</div>
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default Home
