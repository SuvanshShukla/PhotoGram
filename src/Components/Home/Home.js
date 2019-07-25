import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button, Row, Col, Avatar } from "antd";
import { Redirect } from "react-router";    //>>this works like a charm!
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
            {user? 
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
          </Menu>:
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="0"><b>Login to Enter Super PhotoGram!!</b></Menu.Item>
        </Menu>}
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Super PhotoGram</Breadcrumb.Item>
              {user? <Breadcrumb.Item>Home</Breadcrumb.Item>:<Breadcrumb.Item>Login page</Breadcrumb.Item>}
            </Breadcrumb>
            <div style={{ background: "#fff", padding: 24, minHeight: 500 }}>
              {/*-> this is where you'll add the login options*/}
              {user?
              <div>
                <Row type='flex' justify='center'>
                  <Col span={12}>
                    <Col span ={24} offset={6}><h1>Welcome to Super PhotoGram!!</h1></Col>
                    <Col span ={24} offset={6}><Avatar size={200} icon="user" src={user.photoURL}/></Col>
                    <Col span ={24} offset={6}><h2>{user.displayName}</h2></Col>
                    <Col span ={24} offset={6}><Button><Link to="/myposts">My Posts</Link></Button></Col>
                    <Col span ={10} offset={6}><Button type='primary' block onClick={()=>{logout()}}>Logout</Button></Col>
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
                    {/* <Redirect to="/gallery"/> //>>works, but you can't go back to homepage */}
