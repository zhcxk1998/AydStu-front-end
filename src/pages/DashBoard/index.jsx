import React, { Component } from 'react'
import {
  Button, Row, Col, Icon, Modal, Form, Input, Radio,
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

class DashBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpened: false,
    }
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleConfirmClick = this.handleConfirmClick.bind(this)
    this.handleCancelClick = this.handleCancelClick.bind(this)
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

  handleButtonClick() {
    this.setState({
      isModalOpened: true,
    })
  }

  handleConfirmClick() {
    this.setState({
      isModalOpened: false,
    })
  }

  handleCancelClick() {
    this.setState({
      isModalOpened: false,
    })
  }

  render() {
    const { isModalOpened } = this.state
    const { form } = this.props
    const { getFieldDecorator } = form;
    return (
      <div className="dashboard-container">
        <Modal
          title="修改个人信息"
          visible={isModalOpened}
          onOk={this.handleConfirmClick}
          onCancel={this.handleCancelClick}
        >
          <Form layout="vertical">
            <Form.Item label="姓名">
              {getFieldDecorator('姓名', {
                rules: [{ message: '请输入姓名！' }],
                initialValue: 'BB小天使',
              })(<Input />)}
            </Form.Item>
            <Form.Item label="学号">
              {getFieldDecorator('学号', {
                initialValue: '1701030025',
              })(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="性别" className="collection-create-form_last-form-item">
              {getFieldDecorator('性别', {
                initialValue: '男',
              })(
                <Radio.Group>
                  <Radio value="男">男</Radio>
                  <Radio value="女">女</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
          </Form>
        </Modal>
        <div className="dashboard-background" />
        <div className="dashboard-wrap">
          <div className="overview-container">
            <div className="overview-header">
              <div className="description">
                <div className="title">欢迎回来 BB小天使</div>
                这是你近期的状态概览，快点来看一下吧！
              </div>
              <Button type="primary" size="large" shape="round" onClick={this.handleButtonClick}>修改个人资料</Button>
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
              <Col span={7} className="data-wrap">
                <div className="title">
                  <Icon type="carry-out" style={{ color: '#66a6ff' }} />
                  &nbsp;阅读任务列表
                  <div className="description">
                    以下是您将要完成的阅读任务，请抓紧时间哟
                  </div>
                </div>
                <div className="task__container">
                  <div className="task__wrap">
                    <div className="id">1</div>
                    <div className="info">
                      <div className="name">阅读三本书籍 (1/3)</div>
                      <div className="price">积分 +3</div>
                    </div>
                    <button className="btn" type="button">去完成</button>
                  </div>
                  <div className="task__wrap">
                    <div className="id">2</div>
                    <div className="info">
                      <div className="name">发表两次书评 (0/2)</div>
                      <div className="price">积分 +2</div>
                    </div>
                    <button className="btn" type="button">去完成</button>
                  </div>
                  <div className="task__wrap">
                    <div className="id">3</div>
                    <div className="info">
                      <div className="name">观看三小时名师微课 (2/3)</div>
                      <div className="price">积分 +5</div>
                    </div>
                    <button className="btn" type="button">去完成</button>
                  </div>
                  <div className="task__wrap" style={{ borderBottom: 0 }}>
                    <div className="id">4</div>
                    <div className="info">
                      <div className="name">完成一次答题闯关 (0/1)</div>
                      <div className="price">积分 +3</div>
                    </div>
                    <button className="btn" type="button">去完成</button>
                  </div>
                  <div style={{ marginTop: '15px', padding: '0 20px' }}><Button type="primary" block>查看更多</Button></div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}


export default Form.create({ name: 'index' })(DashBoard)
