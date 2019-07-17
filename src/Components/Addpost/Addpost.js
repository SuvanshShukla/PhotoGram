import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Input, Button, notification, Icon } from 'antd';
const { Header, Content, Footer } = Layout;


function Addpost({ getPostTitle, pushPost, getPostDesc, postDesc, postTitle, getPostImage, postImage }) {

    const openNotification = () => {
        notification.open({
          message: 'Post Creation Successful',
          description:
            "Post successfully created! To see your post go to the Gallery tab.",
          icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
        });
      };

    return (
        <div>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="2">Add a new post</Menu.Item>
                        <Menu.Item key="3"><Link to="/gallery">Gallery</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        Post Title:
                    <Input placeholder="input with clear icon" allowClear onChange={(e) => { getPostTitle(e) }} value={postTitle}/>
                        Post Description:
                    <Input placeholder="input with clear icon" allowClear onChange={(f) => { getPostDesc(f) }} value={postDesc}/>
                        Post Image:
                    <Input placeholder="input with clear icon" allowClear onChange={(g) => { getPostImage(g) }} value={postImage}/>
                        <Button type="primary" onClick={() => { pushPost(); openNotification()}}>Submit</Button>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    );
}




export default Addpost;






