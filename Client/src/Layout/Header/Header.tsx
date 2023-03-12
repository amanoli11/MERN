import { Avatar, Col, Dropdown, MenuProps, Row, Switch, theme } from "antd";
import { Header } from "antd/es/layout/layout";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "./header.css";

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
        localStorage.removeItem("userToken");
        navigate("/");
      },
    },
  ];

  return (
    <Header
      style={{
        padding: 0,
        top: 0,
        margin: 0,
        background: colorBgContainer,
        position: "sticky",
        zIndex: 1,
      }}
    >
      <Row>
        <Col span={20}>
          <Typography.Title ellipsis level={4} style={{ marginLeft: 10 }}>
            Bhatbhateni Supermarket Pvt.Ltd
          </Typography.Title>
        </Col>
        <Col
          span={4}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            columnGap: 10,
          }}
        >
          <Switch
            checkedChildren="Light"
            unCheckedChildren="Dark"
            defaultChecked
          />
          <Dropdown menu={{ items }} trigger={["click"]}>
            <Avatar
              style={{
                backgroundColor: "#00a2ae",
                verticalAlign: "middle",
                cursor: "pointer",
                marginRight: 7,
              }}
              size="large"
            >
              User
            </Avatar>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default LayoutHeader;
