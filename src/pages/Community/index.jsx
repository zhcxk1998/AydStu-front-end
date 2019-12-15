import React from 'react'
import {
  PageHeader,
  Card,
  List,
  Icon,
  Input,
  Radio,
  Drawer,
  notification,
  Comment,
  Avatar,
  Form,
  Button,
} from 'antd';
import './index.scss'
import Meta from 'antd/es/card/Meta';
import RadioGroup from 'antd/es/radio/group';
import moment from 'moment';

const { Search, TextArea } = Input;

// 书评列表
const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`书评个数：${comments.length}`}
    pagination={{ pageSize: 6 }}
    itemLayout="horizontal"
    renderItem={(props) => <Comment className="content-commend" {...props} />}
  />
);
// 书评发表栏
const Editor = ({
  onChange, onSubmit, submitting, value,
}) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        发表书评
      </Button>
    </Form.Item>
  </div>
);


class Community extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawVisible: false,
      showAllBook: true,
      AllBook: [
        {
          id: 1,
          bookName: '安徒生童话',
          author: '（丹麦）安徒生 ',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="https://ro.bnuz.edu.cn/book/category_tonghua/7f20b155-cf83-4d42-93e8-95310975afe7.png"
          />,
        },
        {
          id: 2,
          bookName: '了不起的狐狸爸爸',
          author: '（美国）罗尔德·达尔',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="http://ro.bnuz.edu.cn/book/category_tonghua/5917bd81-2daa-4cef-a940-9fec3a070f8c.png"
          />,
        },
        {
          id: 3,
          bookName: '亲爱的汉修先生',
          author: '贝芙莉·克莱瑞',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="http://ro.bnuz.edu.cn/book/category_xiaoshuo/0251d4d0-cdeb-446a-85ae-3f69010a7c8a.png"
          />,
        },
        {
          id: 4,
          bookName: '鲁宾逊漂流记',
          author: '（英国）笛福/著',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="https://ro.bnuz.edu.cn/book/category_xiaoshuo/06856e86-bdf7-4e9b-94e9-1a15b383a726.png"
          />,
        },
        {
          id: 5,
          bookName: '夏洛的网',
          author: 'E.B.怀特/E.B.White',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="http://ro.bnuz.edu.cn/book/category_tonghua/372e601c-a142-44b5-9b6f-98f841123229.png"
          />,
        },
        {
          id: 6,
          bookName: '小猪唏哩呼噜',
          author: '孙幼军 著',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="https://ro.bnuz.edu.cn/book/category_manhua/9cf63065-8082-4080-96f0-ea0859fdeb73.png"
          />,
        },
        {
          id: 7,
          bookName: '草房子',
          author: '曹文轩/ 著',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="http://ro.bnuz.edu.cn/book/category_xiaoshuo/026a0c79-7ef0-4ee9-8957-eadc50b1300a.png"
          />,
        },
        {
          id: 8,
          bookName: '绿野仙踪',
          author: '（美）弗兰克•鲍姆 著',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="http://ro.bnuz.edu.cn/book/category_tonghua/1cea7c14-fd4f-4faa-907d-dc2cb100ea0e.png"
          />,
        },
        {
          id: 9,
          bookName: '绿野仙踪',
          author: '（美）弗兰克•鲍姆 著',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="http://ro.bnuz.edu.cn/book/category_tonghua/1cea7c14-fd4f-4faa-907d-dc2cb100ea0e.png"
          />,
        },
        {
          id: 10,
          bookName: '绿野仙踪',
          author: '（美）弗兰克•鲍姆 著',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="http://ro.bnuz.edu.cn/book/category_tonghua/1cea7c14-fd4f-4faa-907d-dc2cb100ea0e.png"
          />,
        },
        {
          id: 11,
          bookName: '绿野仙踪',
          author: '（美）弗兰克•鲍姆 著',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="http://ro.bnuz.edu.cn/book/category_tonghua/1cea7c14-fd4f-4faa-907d-dc2cb100ea0e.png"
          />,
        },
        {
          id: 12,
          bookName: '绿野仙踪',
          author: '（美）弗兰克•鲍姆 著',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="http://ro.bnuz.edu.cn/book/category_tonghua/1cea7c14-fd4f-4faa-907d-dc2cb100ea0e.png"
          />,
        },
      ],
      RecommendBook: [
        {
          id: 1,
          bookName: '安徒生童话',
          author: '（丹麦）安徒生 ',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="https://ro.bnuz.edu.cn/book/category_tonghua/7f20b155-cf83-4d42-93e8-95310975afe7.png"
          />,
        },
        {
          id: 2,
          bookName: '了不起的狐狸爸爸',
          author: '（美国）罗尔德·达尔',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="http://ro.bnuz.edu.cn/book/category_tonghua/5917bd81-2daa-4cef-a940-9fec3a070f8c.png"
          />,
        },
        {
          id: 3,
          bookName: '亲爱的汉修先生',
          author: '贝芙莉·克莱瑞',
          cover: <img
            alt="example"
            style={{ height: 282.4 }}
            src="http://ro.bnuz.edu.cn/book/category_xiaoshuo/0251d4d0-cdeb-446a-85ae-3f69010a7c8a.png"
          />,
        },
      ],
      bookSelected: 1,
      commentSubmitting: false,
      commentValue: '',
      comments: [
        {
          author: <h2>Yum</h2>,
          avatar: 'http://cdn.algbb.cn/emoji/32.png',
          content: <h3><b>这本书太好看了，我都看了一亿次了</b></h3>,
          datetime: <b>盘古开天辟地以前</b>,
        },
        {
          author: <h2>BB</h2>,
          avatar: 'http://cdn.algbb.cn/emoji/31.png',
          content: <h3><b>这本书太好看了，我都看了一亿次了</b></h3>,
          datetime: <b>盘古开天辟地以前</b>,
        },
        {
          author: <h2>pleple</h2>,
          avatar: 'http://cdn.algbb.cn/emoji/30.png',
          content: <h3><b>这本书太好看了，我都看了一亿次了</b></h3>,
          datetime: <b>盘古开天辟地以前</b>,
        },
        {
          author: <h2>lwt</h2>,
          avatar: 'http://cdn.algbb.cn/emoji/29.png',
          content: <h3><b>这本书太好看了，我都看了一亿次了</b></h3>,
          datetime: <b>盘古开天辟地以前</b>,
        },
        {
          author: <h2>zyh</h2>,
          avatar: 'http://cdn.algbb.cn/emoji/28.png',
          content: <h3><b>这本书太好看了，我都看了一亿次了</b></h3>,
          datetime: <b>盘古开天辟地以前</b>,
        },
        {
          author: <h2>ljc</h2>,
          avatar: 'http://cdn.algbb.cn/emoji/27.png',
          content: <h3><b>这本书太好看了，我都看了一亿次了</b></h3>,
          datetime: <b>盘古开天辟地以前</b>,
        },
      ],
    }
  }

  handleCommentSubmit = () => {
    if (!this.state.commentValue) {
      return;
    }

    this.setState({
      commentSubmitting: true,
    });

    setTimeout(() => {
      this.setState({
        commentSubmitting: false,
        commentValue: '',
        comments: [
          {
            author: <h2>Yum</h2>,
            avatar: 'http://cdn.algbb.cn/emoji/32.png',
            content: <h3><b>{this.state.commentValue}</b></h3>,
            datetime: <b>{moment().fromNow()}</b>,
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleCommentChange = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  selectedBook = (value) => {
    this.setState({
      bookSelected: value,
    });
  };

  switchAllBook = () => {
    this.setState({
      showAllBook: true,
    });
  };

  switchRecommendBook = () => {
    this.setState({
      showAllBook: false,
    });
  };


  showDraw = () => {
    this.setState({
      drawVisible: true,
    });
  };

  closeDraw = () => {
    this.setState({
      drawVisible: false,
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
    const { commentSubmitting, commentValue, comments } = this.state;
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
          <div
            style={{
              textAlign: 'center',
              marginRight: 90,
            }}
            className="wrap"
          >
            <RadioGroup defaultValue="all" className="content-switch" buttonStyle="solid">
              <Radio.Button
                value="recommend"
                style={{
                  width: 300,
                  height: 50,
                  paddingTop: 7,
                }}
                onClick={this.switchRecommendBook}
              >
                推荐书籍
              </Radio.Button>
              <Radio.Button
                value="all"
                style={{
                  width: 300,
                  height: 50,
                  paddingTop: 7,
                }}
                onClick={this.switchAllBook}
              >
                全部书籍
              </Radio.Button>
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
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 8,
            }}
            dataSource={this.state.showAllBook ? this.state.AllBook : this.state.RecommendBook}
            renderItem={(item) => (
              <List.Item>
                <Card
                  hoverable
                  className="data"
                  actions={[<Button type="primary" onClick={() => { this.showDraw(); this.selectedBook(item.id); }}>社区</Button>]}
                  style={{ width: 280, marginTop: 30 }}
                  cover={item.cover}
                >
                  <Meta title={item.bookName} description={item.author} />
                </Card>
              </List.Item>
            )}
          />
        </div>
        <Drawer
          id="topDraw"
          title="作品社区 书评区"
          placement="left"
          closable
          onClose={this.closeDraw}
          visible={this.state.drawVisible}
          width={900}
        >
          <div>
            {comments.length > 0 && <CommentList comments={comments} />}
            <Comment
              avatar={(
                <Avatar
                  src="http://cdn.algbb.cn/emoji/32.png"
                  alt="Yum"
                />
              )}
              content={(
                <Editor
                  onChange={this.handleCommentChange}
                  onSubmit={this.handleCommentSubmit}
                  submitting={commentSubmitting}
                  value={commentValue}
                />
              )}
            />
          </div>
        </Drawer>
      </div>
    )
  }
}

export default Community
