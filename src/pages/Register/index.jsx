import React from 'react'
import {
  Button, Tooltip, Modal, List,
} from 'antd'
import { Link } from 'react-router-dom'
import './index.scss'

export default class Course extends React.Component {
  constructor(props) {
    super(props);
    /**
     * 本页面初始数据
     * @type {{visible: boolean, courseList: *[]}}
     */
    this.state = {
      visible: false,
      collectionList: [],
      courseList: [
        {
          title: '微课1',
          description: '这是微课1的简介',
          link: '/',
          isDisabled: false,
        },
        {
          title: '微课2',
          description: '这是微课2的简介',
          link: '/',
          isDisabled: false,
        },
        {
          title: '微课3',
          description: '这是微课3的简介',
          link: '/',
          isDisabled: false,
        },
        {
          title: '微课4',
          description: '这是微课4的简介',
          link: '/',
          isDisabled: false,
        },
        {
          title: '微课5',
          description: '这是微课5的简介',
          link: '/',
          isDisabled: false,
        },
        {
          title: '微课6',
          description: '这是微课6的简介',
          link: '/',
          isDisabled: false,
        },
        {
          title: '微课7',
          description: '这是微课7的简介',
          link: '/',
          isDisabled: false,
        },
      ],
    }
  }

  componentDidMount() {
    const timer = setInterval(() => {
      let arr = [];
      this.state.courseList.map((item) => {
        const { isDisabled } = item;
        if (isDisabled) {
          arr = [...arr, item];
        }
      });
      this.setState({
        collectionList: arr,
      });
    }, 1000);
  }

  /**
   * 加入收藏后按钮变不可用
   * @param index
   */
  changeIsDisabled = (index) => {
    const arr = this.state.courseList;
    arr[index].isDisabled = true;
    this.setState({
      courseList: arr,
    });
  };

  /**
   * 弹窗open
   */
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

  /**
   * 弹窗按ok后
   */
  changeInfo = () => {
    this.setState({
      visible: false,
      collectionList: this.state.collectionList,
      courseList: this.state.courseList,
    });
  };

  /**
   * 删除收藏
   */
  deleteCollection = (index) => {
    const arr1 = this.state.collectionList;
    const arr2 = this.state.courseList;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].title === index) arr1.slice(i, 1);
    }
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j].title === index) arr2[j].isDisabled = false;
    }
    this.setState({
      collectionList: arr1,
      courseList: arr2,
    })
  };

  render() {
    const courseArr = this.state.courseList;
    return (
      <div className="course-container">
        <div className="course-background" />
        <div className="course-wrap">
          <div className="course-header">
            <div className="description">
              <div className="title">名师微课</div>
              立即观看名师的小课堂吧！
            </div>
            <Button type="primary" size="large" shape="round" onClick={this.showModal}>我的收藏</Button>
            <Modal
              title="我的收藏"
              visible={this.state.visible}
              onOk={this.changeInfo}
              onCancel={this.hideModal}
              okText="确认"
              cancelText="取消"
            >
              <List
                size="default"
                dataSource={this.state.collectionList}
                renderItem={(item) => (
                  <List.Item className="model-list">
                    {item.title}
                    <Button type="danger" size="default" className="del-collection" onClick={() => this.deleteCollection(item.title)}>删除收藏</Button>
                  </List.Item>
                )}
              />
            </Modal>
          </div>
          <div className="course-list">
            {
              courseArr.map((item, index) => {
                const { title, description, link } = item;
                return (
                  <div className="course-view" key={index}>
                    <div className="course-info">
                      <div className="title">{title}</div>
                      <span className="description">{description}</span>
                      <span className="btn">
                        <Tooltip title="暂无视频，点击前往主页">
                          <Link className="link" to={link}>
                            前往观看
                          </Link>
                        </Tooltip>
                        <Button
                          type="primary"
                          size="small"
                          shape="round"
                          disabled={this.state.courseList[index].isDisabled}
                          onClick={() => this.changeIsDisabled(index)}
                        >
                          加入收藏
                        </Button>
                      </span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
