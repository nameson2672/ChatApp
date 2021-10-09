import { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Checkbox, message } from "antd";

const Login = ({ setUser }) => {
  const url = "http://localhost:5000";

  const getUserWithEmail = async (email, password, newUser, name) => {
    try {
      const method = newUser ? "create" : "login";
      console.log(email, password, method);
      const getUser = await axios({
        method: "post",
        url: `${url}/${method}`,
        data: {
          email,
          password,
          name,
        },
      });
      setUser(getUser.data.data);
    } catch (error) {
      console.log(error.response.data.error);
      message.error(error.response.data.error);
    }
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    getUserWithEmail(
      values.email,
      values.password,
      values.newUser,
      values.name
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        disabled={true}
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="newUser"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>New User</Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
