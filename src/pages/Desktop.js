import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";

import React from "react";
import useHideMenu from "../hooks/useHideMenu";

const { Title, Text } = Typography;

const Desktop = () => {
  useHideMenu(true);

  const close = () => {
    console.log("Salir");
  };
  const nextTicket = () => {
    console.log("NextTicket");
  };
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Sergio Alejandro</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type="success ">5</Text>
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
