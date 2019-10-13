import React from 'react'
import {
  Button,
} from 'antd'
import { Link } from 'react-router-dom'
import './index.scss'

const courseList = [
  { title: '微课1', description: '这是微课1的简介', link: '/' },
  { title: '微课2', description: '这是微课2的简介', link: '/' },
  { title: '微课3', description: '这是微课3的简介', link: '/' },
  { title: '微课4', description: '这是微课4的简介', link: '/' },
  { title: '微课5', description: '这是微课5的简介', link: '/' },
  { title: '微课6', description: '这是微课6的简介', link: '/' },
  { title: '微课7', description: '这是微课7的简介', link: '/' },
];

export default class Course extends React.Component {
  render() {
    return (
      <div className="course-container">
        <div className="course-background" />
        <div className="course-wrap">
          <div className="course-header">
            <div className="description">
              <div className="title">名师微课</div>
              立即观看名师的小课堂吧！
            </div>
            <Button type="primary" size="large" shape="round">我的收藏</Button>
          </div>
          <div className="course-list">
            {
              courseList.map((item, index) => {
                const { title, description, link } = item;
                return (
                  <div className="course-view" key={index}>
                    <div className="course-info">
                      <div className="title">{title}</div>
                      <span className="description">{description}</span>
                      <span className="btn">
                        <Link className="link" to={link}>
                          前往观看
                        </Link>
                        <Button type="primary" size="small" shape="round">加入收藏</Button>
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
