import React from "react";
import { Layout, Menu, Breadcrumb, Card, Icon, Avatar } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "antd/dist/antd.css";

const { Header, Content, Footer } = Layout;


function MyPosts({ postFeed, postDel }) {
    const { Meta } = Card;

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["4"]}
                    style={{ lineHeight: "64px" }}
                >
                    <Menu.Item key="0">
                        <b>Super PhotoGram</b>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/add">Add a new post</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/gallery">Gallery</Link>
                    </Menu.Item>
                    <Menu.Item key="4">My Posts</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Super PhotoGram</Breadcrumb.Item>
              <Breadcrumb.Item>My Posts</Breadcrumb.Item>
            </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    //->The personal feed comes here
                    <div style={{ background: "#fff", padding: 24, minHeight: 500 }}>
                        {postFeed.map((
                            x,
                            i //the feed is mapped and molded into cards at this point
                        ) => (
                                <Card
                                    key={i}
                                    style={{ width: 300 }}
                                    cover={<img alt="example" src={x.imgUrl} />}
                                    actions={[
                                        <Icon type="user" />,
                                        <Icon
                                            type="delete"
                                            onClick={() => {
                                                postDel(i);
                                            }}
                                        />,
                                        <Icon type="ellipsis" />
                                    ]}
                                >
                                    <Meta
                                        avatar={
                                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                        }
                                        title={x.title}
                                        description={x.desc}
                                    />
                                </Card>
                            ))}
                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Made By{" "}
                <a href="https://github.com/SuvanshShukla">Suvansh Shukla</a>
            </Footer>
        </Layout>
    )
}

export default MyPosts
