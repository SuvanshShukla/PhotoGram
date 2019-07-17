import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


//!! make the posts centered and display it in a group of 3

function Gallery({ postFeed, postDel }) {
    const { Meta } = Card;
    return (
        <section>
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['3']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key='0'><b>PhotoGram</b></Menu.Item>
                            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/add">Add a new post</Link></Menu.Item>
                            <Menu.Item key="3">Gallery</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>PhotoGram</Breadcrumb.Item>
                            <Breadcrumb.Item>Gallery</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>

                            {postFeed.map((x, i) =>
                                <Card
                                    style={{ width: 300 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src={x.imgUrl}
                                        />
                                    }
                                    actions={[<Icon type="user" />, <Icon type="delete" onClick={() => { postDel(i) }} />, <Icon type="ellipsis" />]}
                                >
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={x.title}
                                        description={x.desc}
                                    />
                                </Card>
                            )}

                        </div>
                    </Content>
                <Footer style={{ textAlign: 'center' }}>Made By <a href="https://github.com/SuvanshShukla">Suvansh Shukla</a></Footer>
                </Layout>
            </div>
        </section>

    );
}

export default Gallery;

