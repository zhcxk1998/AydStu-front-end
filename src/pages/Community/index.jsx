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
} from 'antd';
import './index.scss'
import Meta from 'antd/es/card/Meta';
import RadioGroup from 'antd/es/radio/group';

const { Panel } = Collapse;
const { Search } = Input;

const data = [
  {
    title: 'Title 1',
    cover: <img alt="example" src="http://cdn.algbb.cn/emoji/32.png" />,
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
              <Search placeholder="输入书名" onSearch={(value) => console.log(value)} enterButton />,
            ]}
          >
            <Row>
              <div style={{ marginTop: 20 }}>
                <RadioGroup defaultValue="a" className="content-switch">
                  <Radio.Button value="recommend">推荐书籍</Radio.Button>
                  <Radio.Button value="all">全部书籍</Radio.Button>
                </RadioGroup>
              </div>
            </Row>
            <Descriptions size="default" column={3}>
              <Descriptions.Item label="hello world">卖竹鼠，三个BB一只，一个BB三只</Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </div>
        /**
        *主界面
        */
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
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  className="data"
                  actions={[<Icon type="ellipsis" key="ellipsis" onClick={this.showRightDraw} />]}
                  style={{ width: 240 }}
                  cover={item.cover}
                >
                  <Meta title="书名" description="作者" />
                </Card>
              </List.Item>
            )}
          />
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
                      <div className="" style={{ display: 'inline-block', float: 'right' }}>
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
              <Panel key={index} header={`发布人:${item.author}`}>{item.description}</Panel>
            </Collapse>
          ))}
        </Drawer>
      </div>
    )
  }
}

export default Community
