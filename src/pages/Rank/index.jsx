import React from 'react';
import './index.scss';
import {
  Table, Input, Button, Icon, PageHeader, Descriptions,
} from 'antd';

const { Search } = Input;

const columns = [
  {
    title: '学号',
    dataIndex: 'number',
  },
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '积分',
    dataIndex: 'coin',
  },
];

const data = [
  {
    key: '1',
    number: '1',
    name: 'Yum',
    coin: '0',
  },
  {
    key: '2',
    number: '2',
    name: 'BB',
    coin: '9999',
  },
  {
    key: '3',
    number: '3',
    name: 'lwt',
    coin: '6666',
  },
]

class Rank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    }
  }

  render() {
    return (
      <div className="content">
        <div className="content-container">
          <div className="content-background" />
          <div id="header">
            <PageHeader
              className="content-header"
              onBack={() => window.history.back()}
              title="返回"
              subTitle="回到上一页"
              extra={[
                <Search placeholder="想要搜索谁" onSearch={(value) => console.log(value)} enterButton />,
              ]}
            >
              <Descriptions size="default" column={3}>
                <Descriptions.Item label="hello world">卖竹鼠，三个BB一只，一个BB三只</Descriptions.Item>
                <Descriptions.Item label="欢迎来到排行榜的demo界面">BB已经卖脱销了</Descriptions.Item>
              </Descriptions>
            </PageHeader>
          </div>
          <div className="Rank-background">
            <Table
              columns={columns}
              dataSource={data}
              size="middle"
              className=""
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Rank
