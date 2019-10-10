import React from 'react'
import { Layout, PageHeader, Tag, Button, Statistic, Descriptions, Row, Card, List, Icon } from 'antd';
import './index.scss'

const { Header, Content } = Layout;

const data = [
  {
    title: 'Title 1',
    cover: <img alt="example" src="http://cdn.algbb.cn/emoji/32.png"/>,
    style: {width:200},
    actions:[<Icon type="ellipsis" key="ellipsis" />],
  },
  {
    title: 'Title 2',
    cover: <img alt="example" src="http://cdn.algbb.cn/emoji/32.png"/>,
    style: {width:200},
    actions:[<Icon type="ellipsis" key="ellipsis" />],
  },
  {
    title: 'Title 3',
    cover: <img alt="example" src="http://cdn.algbb.cn/emoji/32.png"/>,
    style: {width:200},
    actions:[<Icon type="ellipsis" key="ellipsis" />],  },
  {
    title: 'Title 4',
    cover: <img alt="example" src="http://cdn.algbb.cn/emoji/32.png"/>,
    style: {width:200},
    actions:[<Icon type="ellipsis" key="ellipsis" />],  },
  {
    title: 'Title 5',
    cover: <img alt="example" src="http://cdn.algbb.cn/emoji/32.png"/>,
    style: {width:200},
    actions:[<Icon type="ellipsis" key="ellipsis" />],  },
  {
    title: 'Title 6',
    cover: <img alt="example" src="http://cdn.algbb.cn/emoji/32.png"/>,
    style: {width:200},
    actions:[<Icon type="ellipsis" key="ellipsis" />],  },
  {
    title: 'Title 7',
    cover: <img alt="example" src="http://cdn.algbb.cn/emoji/32.png"/>,
    style: {width:200},
    actions:[<Icon type="ellipsis" key="ellipsis" />],  },
  {
    title: 'Title 8',
    cover: <img alt="example" src="http://cdn.algbb.cn/emoji/32.png"/>,
    style: {width:200},
    actions:[<Icon type="ellipsis" key="ellipsis" />],  },
];
class Community extends React.Component {
  constructor(props) {
    super(props);
    status = {}
  }

  render() {
    return (
      <div className="content-container">
        <div id="header">
          <div className="content-background"/>
          <PageHeader className="content-header"
                      onBack={() => window.history.back()}
                      title="返回"
                      subTitle="回到上一页"
                      extra={[
                        <Button key="3">Operation</Button>,
                        <Button key="2">Operation</Button>,
                        <Button key="1" type="primary">
                          Primary
                        </Button>,
                      ]}
          >
            <Descriptions size="default" column={3}>
              <Descriptions.Item label="hello world">卖竹鼠，三个BB一只，一个BB三只</Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </div>
        <div id="mainframe">
          <List className="content-mainframe"
            grid={{
              gutter: 12,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 4,
            }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card className="border-style" actions={item.actions} style={{width:250}} cover={item.cover}>Card content</Card>
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}

export default Community
