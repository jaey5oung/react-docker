import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { Icon } from "@ant-design/compatible";
import { ContainerOutlined } from "@ant-design/icons";
import UserList from "./TotalUser/UserList";
import DashBoard from "./DashBoard/DashBoard";
import ReservationsCalendar from "./TotalReservation/ReservationsCalendar";
import ReservationList from "./TotalReservation/ReservationList";
import UploadProduct from "./UploadProduct/UploadProduct";
import "antd/dist/antd.css";

function AdminContainer() {
  const { Header, Content, Footer, Sider } = Layout;
  const SubMenu = Menu.SubMenu;

  const [Collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed({ collapsed });
  };
  const toggle = () => {
    setCollapsed({ Collapsed: !Collapsed });
  };

  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={Collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="user" />
              <span>Admin</span>
              <Link to="/admin" />
            </Menu.Item>

            <Menu.Item key="2">
              <Icon type="user" />
              <span>사용자 관리</span>
              <Link to="/UserList" />
            </Menu.Item>

            <SubMenu key="3" icon={<ContainerOutlined />} title="예매관리">
              <Menu.Item key="4">
                <span>
                  <Icon type="pie-chart" />
                  내역
                </span>
                <Link to="/reservationList" />
              </Menu.Item>
              <Menu.Item key="5">
                <span>
                  <Icon type="pie-chart" />
                  일정
                </span>
                <Link to="/reservationsCalendar" />
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="6">
              <Icon type="user" />
              <span>상품 관리</span>
              <Link to="/UploadProduct" />
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header style={{ background: "#fff", padding: 0, paddingLeft: 16 }}>
            <Icon
              className="trigger"
              type={Collapsed ? "menu-unfold" : "menu-fold"}
              style={{ cursor: "pointer" }}
              onClick={toggle}
            />
          </Header>

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280,
            }}
          >
            <Route exact path="/admin" component={DashBoard} />
            <Route exact path="/userList" component={UserList} />
            <Route
              path="/reservationsCalendar"
              component={ReservationsCalendar}
            />
            <Route path="/reservationList" component={ReservationList} />
            <Route path="/UploadProduct" component={UploadProduct} />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}

export default AdminContainer;