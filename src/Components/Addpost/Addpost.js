import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Addpost({getPostTitle, pushPost, getPostDesc, postDesc, postTitle, getPostImage, postImage}) {
    return (
        <div>
            <div>
                <h1>This is the page to add posts</h1>
            </div>
            <div>         
                Post Title:
                <input type="text" onChange={(e)=>{getPostTitle(e)}} value={postTitle}></input>
                Post Description:
                <input type="text" onChange={(f)=>{getPostDesc(f)}} value={postDesc}></input>
                Post Image:
                <input type="text" onChange={(g) => {getPostImage(g)}} value={postImage}></input>
                <button onClick={()=>{pushPost()}}>Submit</button>                 
            </div>
            <hr />
            <div>
              <Link to="/gallery">GALLERY</Link>
            </div>
            <hr />
            <div>
              <Link to="/">Home</Link>
            </div>
        </div>
    );
}




export default Addpost;

//-> the fancy layout code is below try to see if you can make the form a little prettier
/* 
     <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
*/