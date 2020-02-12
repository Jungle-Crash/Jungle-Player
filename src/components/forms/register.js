import React from 'react';

import {
    Form, Icon, Input, Button,
  } from 'antd';
  
  class Register extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();

      this.props.form.validateFields((err, values) => {
        if (!err) {
         this.props.submitName(values.userName)
        }
      })
    }

    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <h1>Welcome to the Jungle!</h1>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }

  export default Form.create({ name: 'register' })(Register)


