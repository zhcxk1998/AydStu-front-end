import React, { Component } from 'react'
import { Tabs } from 'antd'

import './index.scss'

const { TabPane } = Tabs

export default class Shopping extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const shoppingList = [
      { cover: require('../../assets/img/1.png'), title: '米奇妙妙小飞鱼', price: 160 },
      { cover: require('../../assets/img/2.png'), title: '米奇妙妙小海豚', price: 45 },
      { cover: require('../../assets/img/3.png'), title: '米奇妙妙三角鱼', price: 231 },
      { cover: require('../../assets/img/4.png'), title: '米奇妙妙虾虾虾', price: 12 },
      { cover: require('../../assets/img/5.png'), title: '米奇妙妙蓝色鱼', price: 67 },
      { cover: require('../../assets/img/6.png'), title: '米奇妙妙小乌贼', price: 98 },
      { cover: require('../../assets/img/7.png'), title: '米奇妙妙小乌龟', price: 147 },
      { cover: require('../../assets/img/8.png'), title: '米奇妙妙小小鱼', price: 297 },
    ]

    const myList = [
      { cover: require('../../assets/img/9.png'), title: '米奇妙妙小丑鱼', price: 233 },
      { cover: require('../../assets/img/10.png'), title: '米奇妙妙小扇贝', price: 544 },
    ]

    return (
      <div className="shopping">
        <div className="score">我的积分: 1314</div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="所有商品" key="1">
            <div className="shopping__container">
              {shoppingList.map((item, index) => {
                const { cover, title, price } = item
                return (
                  <div className="shopping__wrap" key={index}>
                    <div className="shopping__item">
                      <div className="cover">
                        <img src={cover} alt="" />
                      </div>
                      <div className="info">
                        <div className="title">{title}</div>
                        <div className="info__wrap">
                          <div className="price">
                            ￥
                            {price}
                          </div>
                          <div className="btn">立即购买</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </TabPane>
          <TabPane tab="我的商品" key="2">
            <div className="shopping__container">
              {myList.map((item, index) => {
                const { cover, title, price } = item
                return (
                  <div className="shopping__wrap" key={index}>
                    <div className="shopping__item">
                      <div className="cover">
                        <img src={cover} alt="" />
                      </div>
                      <div className="info">
                        <div className="title">{title}</div>
                        <div className="info__wrap">
                          <div className="price">
                            ￥
                            {price}
                          </div>
                          <div className="btn">点击放生</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
