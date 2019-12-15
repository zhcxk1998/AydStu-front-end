import React from 'react'
import './index.scss'
import {Col, Row, Button, Icon, Card, List, Collapse, Drawer} from 'antd';
import Meta from "antd/es/card/Meta";
const { Panel } = Collapse;

const all_book = [
  {
    title: 'book 1',
    img: <img alt="example" width="150px"height="150px" src="http://cdn.algbb.cn/emoji/24.png" />,
    author:"yum",
  },
  {
    title: 'book 2',
    img: <img alt="example" width="150px"height="150px" src="http://cdn.algbb.cn/emoji/25.png" />,
    author:"pleple",
  },
  {
    title: 'book 3',
    img: <img alt="example" width="150px"height="150px" src="http://cdn.algbb.cn/emoji/26.png" />,
    author:"yum",
  },
  {
    title: 'book 4',
    img: <img alt="example" width="150px"height="150px" src="http://cdn.algbb.cn/emoji/27.png" />,
    author:"bb",
  },
  {
    title: 'book 5',
    img: <img alt="example" width="150px"height="150px" src="http://cdn.algbb.cn/emoji/28.png" />,
    author:"lwt",
  },
  {
    title: 'book 6',
    img: <img alt="example" width="150px"height="150px" src="http://cdn.algbb.cn/emoji/29.png" />,
    author:"yih",
  },
  {
    title: 'book 7',
    img: <img alt="example" width="150px"height="150px" src="http://cdn.algbb.cn/emoji/30.png" />,
    author:"yum",
  },
  {
    title: 'book 8',
    img: <img alt="example" width="150px"height="150px" src="http://cdn.algbb.cn/emoji/31.png" />,
    author:"bb",
  },
];
const re_book = [
  {
    title: 'book 1',
    img: <img alt="example" width="150px"height="150px" src="http://cdn.algbb.cn/emoji/24.png" />,
    author:"yum",
  },
  {
    title: 'book 2',
    img: <img alt="example" width="150px"height="150px" src="http://cdn.algbb.cn/emoji/25.png" />,
    author:"pleple",
  },
  {
    title: 'book 4',
    img: <img alt="example" width="150px" height="150px" src="http://cdn.algbb.cn/emoji/27.png"/>,
    author: "bb",
  },
  {
    title: 'book 7',
    img: <img alt="example" width="150px"height="150px" src="http://cdn.algbb.cn/emoji/30.png" />,
    author:"yum",
  },
  {
    title: 'book 8',
    img: <img alt="example" width="150px"height="150px" src="http://cdn.algbb.cn/emoji/31.png" />,
    author:"bb",
  },
];
const comment = [
  {
    title: 'book 1',
    author: 'Yum',
    description: '这本书讲述了一个肥肠感人的故事，嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
  },
  {
    title: 'book 2',
    author: 'pleple',
    description: '这本书讲述了一个肥肠冲动的故事，冲冲冲冲冲冲冲冲冲冲冲冲',
  },
  {
    title: 'book 3',
    author: 'Yum',
    description: '这本书讲述了一个肥肠感人的故事，嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤嘤',
  },
  {
    title: 'book 4',
    author: 'BB',
    description: '这本书讲述了一个肥肠搞笑的故事，哈哈哈哈哈哈哈哈哈哈哈哈',
  },
  {
    title: 'book 5',
    author: 'lwt',
    description: '这本书讲述了一个肥肠搞笑的故事，嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻',
  },
  {
    title: 'book 6',
    author: 'yih',
    description: '这本书讲述了一个肥肠感人的故事，呜呜呜呜呜呜呜呜呜呜',
  },
  {
    title: 'book 7',
    author: 'Yum',
    description: '这本书讲述了一个肥肠感人的故事，哇哇哇哇哇哇哇哇哇哇哇哇',
  },
  {
    title: 'book 8',
    author: 'BB',
    description: '这本书讲述了一个肥肠感人的故事，噫呜呜呜噫噫呜呜呜噫',
  },
];
export default class Bookmanage extends React.Component {
  constructor(props) {
    super(props)
    this.clickSubmit = this.clickSubmit.bind(this)
    // 默认Alert隐藏
    this.state = {
      visible: false,
      book: true
    }
  }
  clickSubmit() {
      this.setState({ visible: true,book: false })
  }
  clickSubmit1() {
    this.setState({ visible: false,book: true})
  }
  showLeftDraw = () => {
    this.setState({leftDrawVisible: true,});
  };

  closeLeftDraw = () => {
    this.setState({leftDrawVisible: false,});
  };
  render() {
    return (
      <div className="book-conter">
        <div className="book-background">
        </div>
          <div style={{ marginTop: 20 }}>
              <Button id="recommend_book" value="recommend_book" onClick={this.clickSubmit1}>推荐书籍</Button>
              <Button id="all_book" value="all_book" onClick={this.clickSubmit}>全部书籍</Button>
              <Button id="question" value="question" >答题闯关</Button>
          </div>
          <div className="book-mid">
          </div>
          <div className="book-recommend" id="all_book">
            {this.state.visible ? (
            <Row className="book-show" type="flex" justify="space-between">
              {
                all_book.map((item, index) => {
                  const { title, img, author } = item;
                  return (
                    <Col span={8} className="count" key={index}>
                      <div id="img" className="img"><a href="#">{img}</a></div>
                      <div className="message">
                        点击图片返回个人中心
                        <br />
                        {title}
                        <br />
                        作者：
                        {author}
                        <br />
                        点击省略号查看图书详细信息
                        <List.Item>
                          <Card
                              hoverable
                              className="data"
                              actions={[<Icon type="ellipsis" key="ellipsis" onClick={this.showLeftDraw} />]}
                              style={{width:350}}
                              cover={item.cover}
                          >
                          </Card>
                        </List.Item>
                        <Drawer
                            id="leftDraw"
                            title="图书详细信息"
                            placement="left"
                            closable
                            onClose={this.closeLeftDraw}
                            visible={this.state.leftDrawVisible}
                            width={800}
                        >
                          {comment.map((item, index) => (
                              <Collapse accordion>
                                <Panel key={index} header={`书号：${item.title}作者:${item.author}`}>{item.description}</Panel>
                              </Collapse>
                          ))}
                        </Drawer>
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
            ):true}
            {this.state.book ? (
            <Row className="book-show" type="flex" justify="space-between">
              {
                re_book.map((item, index) => {
                  const { title, img, author } = item;
                  return (
                      <Col span={8} className="count" key={index}>
                        <div id="img" className="img"><a href="#">{img}</a></div>
                        <div className="message">
                          点击图片返回个人中心
                          <br />
                          {title}
                          <br />
                          作者：
                          {author}
                          <br />
                          点击省略号查看图书详细信息
                          <List.Item>
                            <Card
                                hoverable
                                className="data"
                                actions={[<Icon type="ellipsis" key="ellipsis" onClick={this.showLeftDraw} />]}
                                style={{ width:350}}
                                cover={item.cover}
                            >
                            </Card>
                          </List.Item>
                          <Drawer
                              id="leftDraw"
                              title="图书详细信息"
                              placement="left"
                              closable
                              onClose={this.closeLeftDraw}
                              visible={this.state.leftDrawVisible}
                              width={800}
                          >
                            {comment.map((item, index) => (
                                <Collapse accordion>
                                  <Panel key={index} header={`书号：${item.title}作者:${item.author}`}>{item.description}</Panel>
                                </Collapse>
                            ))}
                          </Drawer>
                        </div>
                      </Col>
                  )
                })
              }
            </Row>
            ) : null}
          </div>
        </div>

    )
  }
}
