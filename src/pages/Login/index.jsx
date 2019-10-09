import React from 'react'
import {
  Form,
  Input,
  Checkbox,
  Button,
  Select,
  message,
} from 'antd';
import { Link } from 'react-router-dom'

import http from '../../utils/fetch'
import { authenticateSuccess, isAuthenticated } from '../../utils/session'

import './index.scss'

const { Option } = Select

message.config({
  maxCount: 1,
})

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { form } = this.props
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const {
          school: { key }, type, username, password, remember,
        } = values

        /* 验证登录信息 */
        this.validateLogin({
          school: key,
          type,
          username,
          password,
        }, remember)
      }
    });
  };

  validateLogin = async (params = {}, remember = false) => {
    const { username } = params
    const { history } = this.props
    const { status, data } = await http.post('http://localhost:4000/users/login', params)
    switch (status) {
      case 'success':
        if (remember) {
          /* 设置cookie */
          authenticateSuccess(username)
        }
        message.success(data.msg)
        history.push('/index')
        break
      case 'fail':
        message.error(data.errMsg)
        break
      default:
        message.warning('请稍后重试！')
    }
  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form;

    return (
      <div className="login-container">
        <div className="login-wrap">
          <div className="logo-container" />
          <Form onSubmit={this.handleSubmit} className="form-container">
            <Form.Item>
              {getFieldDecorator('school', {
                rules: [
                  { required: true, message: '请选择学校信息' },
                ],
              })(
                <Select
                  placeholder="请选择您的学校"
                  labelInValue
                >
                  <Option value="bnuz">北京师范大学珠海分校</Option>
                  <Option value="bitz">北京理工大学珠海分校</Option>
                  <Option value="jluz">吉林大学珠海学院</Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('type', {
                rules: [
                  { required: true, message: '请选择登录类型!' },
                ],
              })(
                <Select
                  placeholder="请选择登录类型"
                >
                  <Option value="teacher">教师</Option>
                  <Option value="student">学生</Option>
                  <Option value="admin">管理员</Option>
                </Select>,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!', whitespace: true }],
              })(<Input autoComplete="off" placeholder="请输入用户名" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请输入密码!',
                  },
                ],
              })(<Input.Password autoComplete="off" placeholder="请输入密码" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                initialValue: true,
                valuePropName: 'checked',
              })(
                <Checkbox>
                  记住密码
                </Checkbox>,
              )}
              <Link style={{ float: 'right' }} to="/register">点击这里，立即注册</Link>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>

      </div>
    );
  }
}

const Login = Form.create({ name: 'loginForm' })(LoginForm);

export default Login
