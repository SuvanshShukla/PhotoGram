import React from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css'


function Gallery({postFeed}) {
    const { Meta } = Card;
    return (
        <section>
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
        </section>

    );
}

export default Gallery;