import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Login from "./Login";
import Schedule from "./Schedule";
import CreateTicket from "./CreateTicket";
import Desktop from "./Desktop";

const { Sider, Content } = Layout;

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Layout style={{ height: "100%" }}>
        <Sider hidden={false} collapsedWidth="0" breakpoint="md">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/login">Ingresar</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/schedule">Cola de tickets</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/create-ticket">Crear Ticket</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/create-ticket" element={<CreateTicket />} />

              <Route path="/desktop" element={<Desktop />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default RouterPage;
