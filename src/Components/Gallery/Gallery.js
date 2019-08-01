import React from "react";
import { Card, Icon, Avatar } from "antd";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Empty, Button } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
const { Header, Content, Footer } = Layout;

//!! make the posts centered and display it in a group of 3

function Gallery({ postFeed, postDel, user }) {
  const { Meta } = Card;
  return (
    <section>
      <div>
        <Layout className="layout">
          {user ?
            <div>
              <Header>
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["3"]}
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
                  <Menu.Item key="3">Gallery</Menu.Item>
                </Menu>
              </Header>
              <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Super PhotoGram</Breadcrumb.Item>
                  <Breadcrumb.Item>Gallery</Breadcrumb.Item>
                </Breadcrumb>
                {postFeed ?
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
                              <Avatar src={user.photoURL} />
                            }
                            title={x.title}
                            description={x.desc}
                          />
                        </Card>
                      ))}
                  </div> :
                  <div>
                    <Empty
                      image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                      imageStyle={{
                        height: 60,
                      }}
                      description={
                        <span>
                          Welp! looks like you haven't made any posts click below to make one!
                    </span>
                      }
                    >
                      <Button type="primary"><Link to="add">Create Now</Link></Button>
                    </Empty>
                  </div>
                }
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Made By{" "}
                <a href="https://github.com/SuvanshShukla">Suvansh Shukla</a>
              </Footer>
            </div>
            :
            <div>
              <Header>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["0"]}
                  style={{ lineHeight: "64px" }}
                >
                  <MenuItem key="0">No user Logged In</MenuItem>
                </Menu>
              </Header>
              <Content style={{ padding: "0 50px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Super PhotoGram</Breadcrumb.Item>
                  <Breadcrumb.Item>Gallery</Breadcrumb.Item>
                </Breadcrumb>
                <Empty
                  image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                  imageStyle={{
                    height: 60,
                  }}
                  description={
                    <span>
                      Aww Man! looks like you aren't logged in. Click below to go to the login page
                                        </span>
                  }
                >
                  <Button type="primary"><Link to="/">Go to login page!</Link></Button>
                </Empty>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Made By{" "}
                <a href="https://github.com/SuvanshShukla">Suvansh Shukla</a>
              </Footer>
            </div>
          }
        </Layout>
      </div>
    </section>
  );
}

export default Gallery;


