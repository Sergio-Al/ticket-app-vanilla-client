import React, { useEffect, useState } from "react";

import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import useHideMenu from "../hooks/useHideMenu";
import { getUserStorage } from "../helpers/getUserStorage";

const { Title, Text } = Typography;

const Login = () => {
  useHideMenu(false);
  const navigate = useNavigate();
  const [user] = useState(getUserStorage());
  console.log(user);
  const onFinish = ({ agent, desktop }) => {
    localStorage.setItem("agent", agent);
    localStorage.setItem("desktop", desktop);
    navigate("/desktop");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (user.agent && user.desktop) {
      navigate("/desktop");
    }
  }, [navigate, user]);

  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y numero de escritorio</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre de agente"
          name="agent"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su nombre!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="desktop"
          rules={[
            {
              required: true,
              message: "Ingrese su numero de escritorio!",
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 14,
          }}
        >
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
