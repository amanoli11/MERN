import { Avatar, Col, Dropdown, MenuProps, Row, Switch, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
// import "./header.css";

const LayoutHeader = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  //   const ColorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];

  const items: MenuProps["items"] = [
    {
      label: "View Profile",
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: "Logout",
      key: "1",
      danger: true,
      onClick: () => {
        sessionStorage.removeItem("accessToken");
        navigate("/");
      },
    },
  ];

  return (
    <Header
      style={{
        height: 50,
        background: colorBgContainer,
        padding: "0px 10px 0px 15px",
      }}
    >
      <Row style={{ display: "flex" }}>
        <Col span={20}>
          <Typography.Title
            style={{ marginTop: 12, marginBottom: 10 }}
            ellipsis
            level={4}
          >
            Bhatbhateni Supermarket Pvt.Ltd
          </Typography.Title>
        </Col>
        <Col
          span={4}
          style={{
            height: 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Avatar
              style={{ cursor: "pointer" }}
              size="default"
              icon={<UserOutlined />}
            />
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default LayoutHeader;
