import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps, Switch } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./defaultLayout.css";

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
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <u style={{ color: "whitesmoke" }}>
          <h2 className="companyName">
            {collapsed ? "AMS" : "Aman Management System"}
          </h2>
        </u>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            top: 0,
            margin: 0,
            background: colorBgContainer,
            position: "sticky",
            zIndex: 1,
            boxShadow: "0 0 3px #ccc",
            borderRadius: 5,
          }}
        >
          <Switch
            checkedChildren="Light"
            unCheckedChildren="Dark"
            defaultChecked
          />
          {/* <h3 style={{ margin: 0, padding: 0 }}>HEADER</h3> */}
        </Header>
        <Content style={{ margin: "0 16px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>POS</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}

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
