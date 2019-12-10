import React, { Component } from 'react'
import {
  Button, Row, Col, Icon,
} from 'antd'
import { Link } from 'react-router-dom'
import echarts from 'echarts'

import './index.scss'

const overviewList = [
  { count: 41, description: '发表书评' },
  { count: 121, description: '阅读书籍' },
  { count: 18, description: '完成任务' },
  { count: 3294, description: '海洋积分' },
]

const bookList = [
  {
    name: '深入浅出React和Redux', description: '本书由浅入深地介绍如何用React和Redux构建现代化的、高效的前端项目，产出高质量的前端代码。', link: '/', cover: 'http://img13.360buyimg.com/n1/jfs/t5107/58/1653926146/128683/79be7ee8/5912e2fcNf9a839fc.jpg',
  },
  {
    name: 'React进阶之路', description: '本书详细介绍了React技术栈设计的主要技术。本书分为基础篇、进阶篇和实战篇三部分。基础篇主要介绍React的基本用法，包括React16的新特性', link: '/', cover: 'http://img12.360buyimg.com/n1/jfs/t18535/190/1289736068/101782/6c6ab901/5ac46127Nbaa19e5d.jpg',
  },
]

export default class DashBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    const myCharts = echarts.init(document.getElementById('myCharts'))
    const option = {
      title: {
        text: '学习情况分析',
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}小时 ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['阅读书籍', '海洋世界', '名师微课', '书香奇谈', '作品社区'],
      },
      series: [
        {
          name: '学习时间',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 6, name: '作品社区' },
            { value: 18, name: '阅读书籍' },
            { value: 12, name: '海洋世界' },
            { value: 6, name: '名师微课' },
            { value: 3, name: '书香奇谈' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    myCharts.setOption(option);
  }

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
                  const {
                    name, description, link, cover,
                  } = item
                  return (
                    <div className="book-container" key={index}>
                      <div className="book-img" style={{ backgroundImage: `url(${cover})` }} />
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
              <Col span={7} className="data-wrap">
                <div className="title">
                  <Icon type="pie-chart" style={{ color: '#66a6ff' }} />
                  &nbsp;学习情况分析
                  <div className="description">
                    这是您最近学习时间的情况分析
                  </div>
                </div>
                <div className="charts__wrap" id="myCharts" />
              </Col>
              <Col span={7} className="data-wrap" />
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
