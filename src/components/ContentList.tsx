import React from 'react'

import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import ContentCard from './ContentCard'
import Item from 'antd/lib/list/Item';

interface Icon {
    icon: any,
    text: string
}
const listData: any[] = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut error, asperiores necessitatibus dicta repellat rem voluptates possimus culpa, ratione veritatis quaerat. Culpa esse officia nulla aspernatur, odio obcaecati reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut error, asperiores necessitatibus dicta repellat rem voluptates possimus culpa, ratione veritatis quaerat. Culpa esse officia nulla aspernatur, odio obcaecati reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut error, asperiores necessitatibus dicta repellat rem voluptates possimus culpa, ratione veritatis quaerat. Culpa esse officia nulla aspernatur, odio obcaecati reiciendis ",
        imgLinks: ["https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random",]
    });

}

const IconText = ({ icon, text }: Icon) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const ContentList = () => {
    return (
        <div className="content-list">
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3,
                }}
                dataSource={listData}
                footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                }
                renderItem={item => (
                    // <List.Item
                    //     key={item.title}
                    //     actions={[
                    //         <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    //         <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    //         <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    //     ]}

                    // >
                    //     <List.Item.Meta
                    //         avatar={<Avatar src={item.avatar} />}
                    //         title={<a href={item.href}>{item.title}</a>}
                    //         description={item.description}
                    //     />
                    //     {item.content}
                    // </List.Item>
                    <ContentCard
                        imgLinks={item.imgLinks}
                        avatar={item.avatar}
                        title={item.title}
                        description={item.description}
                        content={item.content}
                        href={item.href} />
                )}
            />

        </div>
    )
}

export default ContentList
