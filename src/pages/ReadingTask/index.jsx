import React from 'react'
import {
  Table, Divider, Tag,
} from 'antd'
import { Link } from 'react-router-dom'
import './index.scss'

const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    taskName: '寒假书香之旅',
    begin: '2019-01-01',
    over: '2019-01-01',
    tip: '认真阅读！',
    tags: ['老师抽查', '家长确认'],
  },
  {
    key: '2',
    taskName: '暑假书海之旅',
    begin: '2019-01-01',
    over: '2019-01-01',
    tip: '认真阅读！',
    tags: ['老师抽查'],
  },
  {
    key: '3',
    taskName: '国庆爱心礼包',
    begin: '2019-01-01',
    over: '2019-01-01',
    tip: '认真阅读！',
    tags: ['家长确认'],
  },
  {
    key: '4',
    taskName: '五一快乐礼包',
    begin: '2019-01-01',
    over: '2019-01-01',
    tip: '认真阅读！',
    tags: ['老师抽查','家长确认'],
  },
  {
    key: '5',
    taskName: '中秋充实礼包',
    begin: '2019-01-01',
    over: '2019-01-01',
    tip: '认真阅读！',
    tags: ['家长确认'],
  },
  {
    key: '6',
    taskName: '元宵团圆礼包',
    begin: '2019-01-01',
    over: '2019-01-01',
    tip: '认真阅读！',
    tags: ['老师抽查','家长确认'],
  },
  {
    key: '7',
    taskName: '元旦跨年礼包',
    begin: '2019-01-01',
    over: '2019-01-01',
    tip: '认真阅读！',
    tags: ['老师抽查','家长确认'],
  },
];

export default class ReadingTask extends React.Component {

  render() {
    return (
      <div className="task-container">
        <div className="task-background"/>
        <div className="task-wrap">
          <div className="overview-container">
            <div className="overview-header">
              <div className="description">
                <div className="title">阅读任务</div>
                这是你近期的阅读任务，请尽快完成哦！
              </div>
            </div>
          </div>
          <Table dataSource={data}>
            <Column title="任务名称" dataIndex="taskName" className="c1" key="taskName" />
            <Column title="开始时间" dataIndex="begin" className="c1" key="begin" />
            <Column title="结束时间" dataIndex="over" className="c1" key="over" />
            <Column title="描述" dataIndex="tip" className="c1" key="tip" />
            <Column
              title="检查方式"
              dataIndex="tags"
              className="c1"
              key="tags"
              render={tags => (
                <span>
              {tags.map(tag => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </span>
              )}
            />
            <Column
              title="选项"
              key="action"
              className="c1"
              render={(text, record) => (
                <span>
              <a>确认完成 {record.lastName}</a>
              <Divider type="vertical" />
              <a>请求延期</a>
            </span>
              )}
            />
          </Table>
        </div>
      </div>
    )
  }
}
