import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



function Gallery({postFeed}) {
    const { Meta } = Card;
    return (
        <section>
            <div>
            <h1>This is supposed to be the gallery</h1>
            {postFeed.map((x)=>
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={x.imgUrl} />}
            >
                <Meta title={x.title} description={x.desc} />
            </Card>
            )}
            </div>
            <hr />
            <div>
                <Link to="/add">Add a new post</Link>
            </div>
            <hr />
            <div>
            <Link to="/">Home</Link>
            </div>
        </section>

    );
}

export default Gallery;