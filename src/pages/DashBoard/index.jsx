import React from 'react'
import {
  Button, Row, Col, Icon,
} from 'antd'
import { Link } from 'react-router-dom'
import './index.scss'

const overviewList = [
  { count: 41, description: '发表书评' },
  { count: 121, description: '阅读书籍' },
  { count: 18, description: '完成任务' },
  { count: 3294, description: '海洋积分' },
]

const bookList = [
  { name: '小故事大道理', description: '小故事大道理小故事大道理小故事大道理小故事大道理小故事大道理小故事大道理', link: '/' },
  { name: '小故事大道理', description: '小故事大道理小故事大道理小故事大道理小故事大道理小故事大道理小故事大道理', link: '/' },
]

export default class DashBoard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <div className="dashboard-background" />
        <div className="dashboard-wrap">
          <div className="overview-container">
            <div className="overview-header">
              <div className="description">
                <div className="title">欢迎回来 BB小天使</div>
                这是你近期的状态概览，快点来看一下吧！
              </div>
              <Button type="primary" size="large" shape="round">修改个人资料</Button>
            </div>
            <Row className="overview-content" type="flex" justify="space-between">
              {overviewList.map((item, index) => {
                const { count, description } = item
                return (
                  <Col span={5} className="count" key={index}>
                    {count}
                    <div className="description">
                      {description}
                    </div>
                  </Col>
                )
              })}
            </Row>
          </div>
          <div className="data-container">
            <div className="data-header">
              个人资料
            </div>
            <Row className="data-content" type="flex" justify="space-between">
              <Col span={7} className="data-wrap">
                <div className="title">
                  <Icon type="book" style={{ color: '#66a6ff' }} />
                  &nbsp;本周在阅书籍
                  <div className="description">
                    请抓紧时间阅读哦，以免书籍过期退回
                  </div>
                </div>
                {bookList.map((item, index) => {
                  const { name, description, link } = item
                  return (
                    <div className="book-container" key={index}>
                      <div className="book-img" />
                      <div className="book-info">
                        <div className="name">{name}</div>
                        <div className="description">{description}</div>
                        <Link className="link" to={link}>
                          <Icon type="read" />
                          <span>&nbsp;立即阅读</span>
                        </Link>
                      </div>
                    </div>
                  )
                })}
                <div style={{ padding: '0 20px' }}><Button type="primary" block>查看更多</Button></div>
              </Col>
              <Col span={7} className="data-wrap" style={{ background: 'url(http://cdn.algbb.cn/emoji/32.png) no-repeat center center' }} />
              <Col span={7} className="data-wrap" style={{ background: 'url(http://cdn.algbb.cn/emoji/32.png) no-repeat center center' }} />
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
