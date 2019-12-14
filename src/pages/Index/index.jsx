import React from 'react'

import {
  Layout,
} from 'antd';
import SiderNav from '../../components/SiderNav'
import ContentMain from '../../components/ContentMain'

import './index.scss'

const {
  Content, Sider, Footer,
} = Layout;

export default class Index extends React.Component {
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
      <Layout hasSider style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} theme="light" className="slider">
          <SiderNav collapsed={collapsed} />
        </Sider>
        <Layout className={`${collapsed ? 'layout-collapsed' : 'layout-unfold'}`}>
          <Content className="content">
            <ContentMain />
          </Content>
          <Footer>
            <div className="footer">粤ICP备 123321123号</div>
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
