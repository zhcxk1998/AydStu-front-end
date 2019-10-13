import React from 'react'
import {
  Button, Row, Col,
} from 'antd'
// import { Link } from 'react-router-dom'
import './index.scss'


const talkList1 = [
  { img: 'url', title: '奇谈1', author: 'AA' },
  { img: 'url', title: '奇谈2', author: 'BB' },
  { img: 'url', title: '奇谈3', author: 'CC' },
  { img: 'url', title: '奇谈4', author: 'DD' },
];

const talkList2 = [
  { img: 'url', title: '奇谈5', author: 'EE' },
];

export default class Talk extends React.Component {
  render() {
    return (
      <div className="talk-container">
        <div className="talk-background" />
        <div className="talk-wrap">
          <div className="talk-header">
            <div className="description">
              <div className="title">书香奇谈</div>
              快来撰写你的新故事吧！
            </div>
            <Button type="primary" size="large" shape="round">添加奇谈</Button>
          </div>
          <Row className="talk-body" type="flex" justify="space-between">
            {
              talkList1.map((item, index) => {
                const { img, title, author } = item;
                return (
                  <Col span={5} className="count" key={index}>
                    <div className="img">{img}</div>
                    <div className="description">
                      {title}
                      <br />
                      作者：
                      {author}
                    </div>
                  </Col>
                )
              })
            }
          </Row>
          <Row className="talk-body" type="flex" justify="space-between">
            {
              talkList2.map((item, index) => {
                const { img, title, author } = item;
                return (
                  <Col span={5} className="count" key={index}>
                    <div className="img">{img}</div>
                    <div className="description">
                      {title}
                      <br />
                      作者：
                      {author}
                    </div>
                  </Col>
                )
              })
            }
          </Row>
        </div>
      </div>
    )
  }
}
