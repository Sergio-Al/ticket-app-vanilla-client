import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import React, { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import useHideMenu from "../hooks/useHideMenu";

const { Text, Title } = Typography;

const CreateTicket = () => {
  useHideMenu(true);

  const { socket } = useContext(SocketContext);
  const [lastTicket, setLastTicket] = useState(null);

  const newTicket = () => {
    socket.emit("request-ticket", null, (ticket) => {
      setLastTicket(ticket);
    });
  };
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Presione un boton para un nuevo ticket</Title>

          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={newTicket}
          >
            Nuevo ticket
          </Button>
        </Col>
      </Row>
      {lastTicket && (
        <Row style={{ marginTop: 100 }}>
          <Col span={14} offset={6} align="center">
            <Text level={2}>Su numero</Text>
            <br />
            <Text type="success" style={{ fontSize: 55 }}>
              {lastTicket.number}
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CreateTicket;
