import React from 'react'
import {
  Button, Row, Col, Card, Modal, Upload, Icon, message, Input
} from 'antd'
// import { Link } from 'react-router-dom'
import './index.scss'

const uploadData = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export default class Talk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visiable: false,
      talkList1: [
        { img: 'url', title: '奇谈1', author: 'AA' },
        { img: 'url', title: '奇谈2', author: 'BB' },
        { img: 'url', title: '奇谈3', author: 'CC' },
        { img: 'url', title: '奇谈4', author: 'DD' },
      ],
      talkList2: [
        { img: 'url', title: '奇谈5', author: 'EE' },
      ],
    }
  };

  showModal = () => {
    this.setState({
      visible: true,
    })
  };

  /**
   * 弹窗close
   */
  hideModal = () => {
    this.setState({
      visible: false,
    })
  };

  render() {
    const { talkList1, talkList2 } = this.state;
    return (
      <div className="talk-container">
        <div className="talk-background" />
        <div className="talk-wrap">
          <div className="talk-header">
            <div className="description">
              <div className="title">书香奇谈</div>
              快来撰写你的新故事吧！
            </div>
            <Button type="primary" size="large" shape="round" onClick={this.showModal}>添加奇谈</Button>
            <Modal
              title="添加奇谈"
              visible={this.state.visible}
              onOk={this.hideModal}
              onCancel={this.hideModal}
              okText="确认"
              cancelText="取消"
            >
              <Upload {...uploadData}>
                <Button>
                  <Icon type="upload" /> Click to Upload
                </Button>
              </Upload>
              <br />
              <p style={{ fontSize: 16 }}>标题: </p>
              <Input placeholder="在此输入标题" allowClear="true" />
              <br />
              <br />
              <p style={{ fontSize: 16 }}>作者: </p>
              <Input placeholder="在此输入作者" allowClear="true" />
            </Modal>
          </div>
          <Row className="talk-body" type="flex" justify="space-between">
            {
              talkList1.map((item, index) => {
                const { img, title, author } = item;
                return (
                  <Col span={5} className="count" key={index}>
                    <Card
                      hoverable
                      style={{ width: 220, height: 225 }}
                      cover={<img alt="example" src={img} />}
                    >
                      <Card.Meta title={title} description={author} />
                    </Card>
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
                    <Card
                      hoverable
                      style={{ width: 220, height: 225 }}
                      cover={<img alt="example" src={img} />}
                    >
                      <Card.Meta title={title} description={author} />
                    </Card>
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
