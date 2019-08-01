import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Layout,
  Menu,
  Breadcrumb,
  Input,
  Button,
  notification,
  Icon
} from "antd";
const { Header, Content, Footer } = Layout;

function Addpost({
  getPostTitle,
  pushPost,
  getPostDesc,
  postDesc,
  postTitle,
  getPostImage,
  postImage,
  user,
  fileUpload
}) {
  const openNotification = () => {
    notification.open({
      message: "Post Creation Successful",
      description:
        "Post successfully created! To see your post go to the Gallery tab.",
      icon: <Icon type="smile" style={{ color: "#108ee9" }} />
    });
  };

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          {user?<Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="0">
              <b>Super PhotoGram</b>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">Add a new post</Menu.Item>
            <Menu.Item key="3">
              <Link to="/gallery">Gallery</Link>
            </Menu.Item>
          </Menu>:null}
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Super PhotoGram</Breadcrumb.Item>
            <Breadcrumb.Item>Add a post</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 500 }}>
            Post Title: {/* This is where the post title is inputed */}
            <Input
              placeholder="Please add your post title here"
              allowClear
              onChange={e => {
                getPostTitle(e);
              }}
              value={postTitle}
            />
            Post Description: {/* This is where post description is inputed*/}
            <Input
              placeholder="Please add your post description here"
              allowClear
              onChange={f => {
                getPostDesc(f);
              }}
              value={postDesc}
            />
            Post Image: {/* This is where the post image is inputed*/}
            {/* <Input
              placeholder="Please add your post image URL here"
              allowClear
              onChange={g => {
                getPostImage(g);
              }}
              value={postImage}
            />
             */}
            <input type="file" onChange={(e)=>{fileUpload(e)}} />
            <Button
              type="primary"
              onClick={() => {
                pushPost();
                openNotification();
              }}
            >
              Submit
            </Button>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Made By <a href="https://github.com/SuvanshShukla">Suvansh Shukla</a>
        </Footer>
      </Layout>
    </div>
  );
}

export default Addpost;
