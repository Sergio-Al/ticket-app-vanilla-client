import React, { useEffect, useState } from "react";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";

import useHideMenu from "../hooks/useHideMenu";

import { getUserStorage } from "../helpers/getUserStorage";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const Desktop = () => {
  const [user] = useState(getUserStorage());
  const navigate = useNavigate();
  useHideMenu(false);

  const close = () => {
    localStorage.clear();
    navigate("/login");
  };
  const nextTicket = () => {
    console.log("NextTicket");
  };

  useEffect(() => {
    if (!user.agent || !user.desktop) {
      navigate("/login");
    }
  }, [navigate, user]);
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agent}</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type="success ">{user.desktop}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={close}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />

      <Row>
        <Col>
          <Text>Esta atendiendo el ticket número: </Text>
          <Text style={{ fontSize: 30 }}>55 </Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={nextTicket} shape="round" type="primary">
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Desktop;
