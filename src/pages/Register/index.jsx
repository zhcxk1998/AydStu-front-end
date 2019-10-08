import React from 'react'
import {
  Form,
  Input,
  Button,
  Select,
} from 'antd';
import { Link } from 'react-router-dom'

import http from '../../utils/fetch'
import { authenticateSuccess, isAuthenticated } from '../../utils/session'

import './index.scss'

const { Option } = Select

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmDirty: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { form } = this.props
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const {
          school: { key }, type, username, password,
        } = values

        /* 验证登录信息 */
        this.validateRegister({
          key, type, username, password,
        })
      }
    });
  };

  handleConfirmBlur = (e) => {
    const { value } = e.target;
    const { confirmDirty } = this.state
    this.setState({ confirmDirty: confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    const { confirmDirty } = this.state
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  validatevalidateRegister = (params = {}) => {
    http.put('http://localhost:4000/users/register', params)
  }

  render() {
    const { form } = this.props
    const { getFieldDecorator } = form;

    return (
      <div className="register-container">
        <div className="register-wrap">
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
            <Form.Item hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请输入密码!',
                  },
                  {
                    validator: this.validateToNextPassword,
                  },
                ],
              })(<Input.Password placeholder="请输入密码" />)}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator('confirm', {
                rules: [
                  {
                    required: true,
                    message: '请确认密码!',
                  },
                  {
                    validator: this.compareToFirstPassword,
                  },
                ],
              })(<Input.Password onBlur={this.handleConfirmBlur} placeholder="请确认密码" />)}
            </Form.Item>
            <Form.Item>
              <Link style={{ float: 'right' }} to="/login">已有用户？立即登录</Link>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const Register = Form.create({ name: 'registerForm' })(RegisterForm);

export default Register
