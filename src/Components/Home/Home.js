import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button, Row, Col } from "antd";
const { Header, Content, Footer } = Layout;

//->This is the homepage
//->This is also where the login will be
//!! add a better navBar

function Home({login, logout, check, user}) {
  return (
    <div>
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="0">
                <b>Super PhotoGram</b>
              </Menu.Item>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">
                <Link to="/add">Add a new post</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/gallery">Gallery</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>PhotoGram</Breadcrumb.Item>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: "#fff", padding: 24, minHeight: 500 }}>
              <h1>Welcome to PhotoGram!!</h1>
              {/*-> this is where you'll add the login options*/}
              {/* {check()} */}
              {user?
              <div>
                <Row type='flex' justify='center'>
                  <Col span={12}>
                    <Button type='primary' block onClick={()=>{logout()}}>Logout</Button>
                    <h3>Congratulations You Are Logged In!</h3>
                  </Col>
                </Row>
              </div>:
              <div>
                <Row type='flex' justify='center'>
                  <Col span={12}>
                    <Button type='primary' block onClick={()=>{login()}}>Login</Button>
                  </Col>
                </Row>
              </div>}
              






            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Made By{" "}
            <a href="https://github.com/SuvanshShukla">Suvansh Shukla</a>
          </Footer>
        </Layout>
      </div>
    </div>
  );
}

export default Home;