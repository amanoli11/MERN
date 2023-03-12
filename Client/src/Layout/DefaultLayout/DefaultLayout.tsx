import { Breadcrumb, Layout, theme } from "antd";
import "./defaultLayout.css";
import LayoutHeader from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const { Header, Content, Footer, Sider } = Layout;

const DefaultLayout = (props: { children: any }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
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
