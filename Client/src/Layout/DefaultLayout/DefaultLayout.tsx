import React, { useState, useContext } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UpOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  ConfigProvider,
  Divider,
  Dropdown,
  MenuProps,
  Switch,
  Typography,
} from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./defaultLayout.css";
import {
  configConsumerProps,
  ConfigContext,
  globalConfig,
} from "antd/es/config-provider";
import { defaultConfig } from "antd/es/theme/internal";
import { readConfigFile } from "typescript";
import LayoutHeader from "../Header/Header";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const DefaultLayout = (props: { children: any }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        // collapsible
        // collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          maxHeight: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Typography.Title
          level={4}
          italic
          style={{ textAlign: "center", color: "white" }}
        >
          {collapsed ? "AMS" : "Aman Management System"}
        </Typography.Title>

        {/* <Dropdown
          placement="bottomRight"
          arrow
          menu={{ items }}
          trigger={["click"]}
        >
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
        </Dropdown> */}
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          // style={{ background: colorBgContainer }}
        />
      </Sider>
      <Layout className="site-layout">
        <LayoutHeader />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>POS</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>

          <div style={{ marginTop: "16px" }}>{props.children}</div>
        </Content>

        <Footer style={{ textAlign: "center", padding: 0 }}>
          AMS ©2023 Created by Aman
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
