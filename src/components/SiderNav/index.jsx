import React from 'react'
import {
  Menu, Icon,
} from 'antd';
import { Link } from 'react-router-dom'
import './index.scss'

const { SubMenu } = Menu;

export default class SiderNav extends React.Component {
  render() {
    const { collapsed } = this.props

    return (
      <div>
        {!!!collapsed ? (
          <div className="nav-container">
            <div className="nav-header">
              <img src="http://cdn.algbb.cn/read.png" alt="" />
              <div>爱阅读学生端</div>
            </div>
            <div className="nav-info">
              <img src="http://cdn.algbb.cn/emoji/32.png" alt="" />
              <div className="nickname">Tom Richard</div>
              <div className="description">A student of BNUZ.</div>
            </div>
          </div>
        ) : (
          <img className="logo" src="http://cdn.algbb.cn/read.png" alt="" />
        )}

        <Menu defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Link to="/index">
              <Icon type="pie-chart" />
              <span>个人中心</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/index/test">
              <Icon type="read" />
              <span>图书管理</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={(
              <span>
                <Icon type="shopping-cart" />
                <span>海洋世界</span>
              </span>
            )}
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <Menu.Item>
            <Link to="/index/community">
              <Icon type="apartment" />
              <span>作品社区</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link to="/index/course">
              <Icon type="play-square" />
              <span>名师微课</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="10">
            <Link to="/index/talk">
              <Icon type="edit" />
              <span>书香奇谈</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="11">
            <Icon type="carry-out" />
            <span>阅读任务</span>
          </Menu.Item>
          <Menu.Item>
            <Link to="/index/rank">
              <Icon type="bar-chart" />
              <span>排行榜</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}
