import React from 'react'
import {
  PageHeader,
  Descriptions,
  Row,
  Card,
  List,
  Icon,
  Input,
  Radio,
  Drawer,
  Button,
  Collapse,
  notification,
  Pagination,
} from 'antd';
import './index.scss'
import Meta from 'antd/es/card/Meta';
import RadioGroup from 'antd/es/radio/group';

const { Panel } = Collapse;
const { Search } = Input;

const AllBook = [
  {
    bookName: '安徒生童话',
    author: '（丹麦）安徒生 ',
    cover: <img
      alt="example"
      style={{ height: 282.4 }}
      src="https://ro.bnuz.edu.cn/book/category_tonghua/7f20b155-cf83-4d42-93e8-95310975afe7.png"
    />,
  },
  {
    bookName: '了不起的狐狸爸爸',
    author: '（美国）罗尔德·达尔',
    cover: <img
      alt="example"
      style={{ height: 282.4 }}
      src="http://ro.bnuz.edu.cn/book/category_tonghua/5917bd81-2daa-4cef-a940-9fec3a070f8c.png"
    />,
  },
  {
    bookName: '亲爱的汉修先生',
    author: '贝芙莉·克莱瑞',
    cover: <img
      alt="example"
      style={{ height: 282.4 }}
      src="http://ro.bnuz.edu.cn/book/category_xiaoshuo/0251d4d0-cdeb-446a-85ae-3f69010a7c8a.png"
    />,
  },
  {
    bookName: '鲁宾逊漂流记',
    author: '（英国）笛福/著',
    cover: <img
      alt="example"
      style={{ height: 282.4 }}
      src="https://ro.bnuz.edu.cn/book/category_xiaoshuo/06856e86-bdf7-4e9b-94e9-1a15b383a726.png"
    />,
  },
  {
    bookName: '夏洛的网',
    author: 'E.B.怀特/E.B.White',
    cover: <img
      alt="example"
      style={{ height: 282.4 }}
      src="http://ro.bnuz.edu.cn/book/category_tonghua/372e601c-a142-44b5-9b6f-98f841123229.png"
    />,
  },
  {
    bookName: '小猪唏哩呼噜',
    author: '孙幼军 著',
    cover: <img
      alt="example"
      style={{ height: 282.4 }}
      src="https://ro.bnuz.edu.cn/book/category_manhua/9cf63065-8082-4080-96f0-ea0859fdeb73.png"
    />,
  },
  {
    bookName: '草房子',
    author: '曹文轩/ 著',
    cover: <img
      alt="example"
      style={{ height: 282.4 }}
      src="http://ro.bnuz.edu.cn/book/category_xiaoshuo/026a0c79-7ef0-4ee9-8957-eadc50b1300a.png"
    />,
  },
  {
    bookName: '绿野仙踪',
    author: '（美）弗兰克•鲍姆 著',
    cover: <img
      alt="example"
      style={{ height: 282.4 }}
      src="http://ro.bnuz.edu.cn/book/category_tonghua/1cea7c14-fd4f-4faa-907d-dc2cb100ea0e.png"
    />,
  },
];
const book = [
  {
    title: 'B神的钢琴曲',
    author: 'BB',
    press: 'BB出版社',
    suitAge: '233岁',
    likeCount: '114',
    subscribed: '514',
    commentNum: '1919',
  },
];
const comment = [
  {
    author: 'Yum',
    description: '这本书太好看了，我都看了一亿次了',
  },
  {
    author: 'BB',
    description: '这本书太好看了，我都看了一亿次了',
  },
  {
    author: 'Yum',
    description: '这本书太好看了，我都看了一亿次了',
  },
  {
    author: 'BB',
    description: '这本书太好看了，我都看了一亿次了',
  },
];


class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rightDrawVisible: false,
      leftDrawVisible: false,
    }
  }


  showRightDraw = () => {
    this.setState({
      rightDrawVisible: true,
    });
  };

  closeRightDraw = () => {
    this.setState({
      rightDrawVisible: false,
    });
  };

  showLeftDraw = () => {
    this.setState({
      leftDrawVisible: true,
    });
  };

  closeLeftDraw = () => {
    this.setState({
      leftDrawVisible: false,
    });
  };

  onSearchBook = (type, value) => {
    if (value === '') {
      notification[type]({
        message: '提示',
        description:
          '搜索的书名不能为空',
      });
    } else {
      console.log(value)
    }
  };


  render() {
    return (
      <div className="content-container">
        /**
        *页头
        */
        <div id="header">
          <div className="content-background" />
          <PageHeader
            className="content-header"
            onBack={() => window.history.back()}
            title="返回"
            subTitle="回到上一页"
            extra={[
              <Search
                id="findBook"
                placeholder="输入书名"
                size="large"
                style={{ width: 500 }}
                onSearch={(value) => this.onSearchBook('warning', value)}
                enterButton
              />,
            ]}
          />
          <div style={{ textAlign: 'center', marginRight: 90 }} className="wrap">
            <RadioGroup defaultValue="all" className="content-switch" buttonStyle="solid">
              <Radio.Button value="recommend" style={{ width: 300, height: 50, paddingTop: 7 }}>推荐书籍</Radio.Button>
              <Radio.Button value="all" style={{ width: 300, height: 50, paddingTop: 7 }}>全部书籍</Radio.Button>
            </RadioGroup>
          </div>
        </div>
        {/** 主界面 */}
        <div id="mainframe">
          <List
            className="content-mainframe"
            grid={{
              gutter: 12,
              xs: 1,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 3,
              xxl: 4,
            }}
            dataSource={AllBook}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  className="data"
                  actions={[<Icon type="info-circle" key="ellipsis" onClick={this.showRightDraw} />]}
                  style={{
                    width: 280,
                    marginTop: 30,
                  }}
                  cover={item.cover}
                >
                  <Meta title={item.bookName} description={item.author} />
                </Card>
              </List.Item>
            )}
          />
          <div style={{
            textAlign: 'center', zIndex: 100, position: 'relative', right: 80,
          }}
          >
            {/* 先弄100数据来测试样子 */}
            <Pagination defaultCurrent={5} total={100} defaultPageSize={8} />
          </div>
        </div>
        <Drawer
          id="rightDraw"
          title="查看推荐语测试"
          placement="right"
          closable
          onClose={this.closeRightDraw}
          visible={this.state.rightDrawVisible}
          width={700}
        >
          <div className="data-container">
            <div className="data-header">
              <Row>
                {book.map((item) => {
                  const {
                    title, author, press, suitAge, likeCount, subscribed, commentNum,
                  } = item;
                  return (
                    <div>
                      <div className="" style={{ display: 'inline-block' }}>
                        <img alt="example" src="http://cdn.algbb.cn/emoji/32.png" />
                        <div className="">
                          <div className="">
                            {title}
                          </div>
                          <div className="">
                            作者：
                            {author}
                          </div>
                          <div className="">
                            出版社:
                            {press}
                          </div>
                          <div className="">
                            适读年龄:
                            {suitAge}
                          </div>
                        </div>
                      </div>
                      <div
                        className=""
                        style={{
                          display: 'inline-block',
                          float: 'right',
                        }}
                      >
                        <div className="">
                          点赞数:
                          {likeCount}
                        </div>
                        <div className="">
                          收藏数:
                          {subscribed}
                        </div>
                        <div className="">
                          书评情况:
                          {commentNum}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Row>
            </div>
          </div>
          <Button type="primary" onClick={this.showLeftDraw}>进入论坛</Button>
        </Drawer>
        <Drawer
          id="leftDraw"
          title="查看书评测试"
          placement="left"
          closable
          onClose={this.closeLeftDraw}
          visible={this.state.leftDrawVisible}
          width={800}
        >
          {comment.map((item, index) => (
            <Collapse accordion>
              <Panel
                className="shuping"
                key={index}
                header={`发布人:${item.author}`}
              >
                {item.description}
              </Panel>
            </Collapse>
          ))}
        </Drawer>
      </div>
    )
  }
}

export default Community
