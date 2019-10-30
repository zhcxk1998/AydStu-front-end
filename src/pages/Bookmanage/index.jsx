import React from 'react'
import './index.scss'
import RadioGroup from 'antd/es/radio/group';
import { Col, Radio, Row } from 'antd';

const book = [
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

export default class Bookmanage extends React.Component {
  render() {
    return (
      <div className="book-conter">
        <div className="book-background">
        </div>
          <div style={{ marginTop: 20 }}>
            <RadioGroup defaultValue="p" className="book-top">
              <Radio.Button value="recommend_book" >推荐书籍</Radio.Button>
              <Radio.Button value="all_book">全部书籍</Radio.Button>
            </RadioGroup>
          </div>
          <div className="book-mid">
          </div>
          <div className="book-recommend">
            <Row className="book-show" type="flex" justify="space-between">
              {
                book.map((item, index) => {
                  const { title, img, author } = item;
                  return (
                    <Col span={8} className="count" key={index}>
                      <div className="img"><a href="#">{img}</a></div>
                      <div className="message">
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
            <RadioGroup defaultValue="p" className="book-top">
              <Radio.Button value="question" >答题闯关</Radio.Button>
            </RadioGroup>
          </div>
        </div>
    )
  }
}
