import React, { useEffect } from 'react'
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import ContentCard from './ContentCard'
import Item from 'antd/lib/list/Item';
import { useModel } from '../hooks/use-model';

interface Icon {
    icon: any,
    text: string
}
const mockData = [
    {
        "articleId": 2,
        "title": "Test",
        "brief": "this is a test",
        "article": "hello i`m Jlunlun",
        "publishTime": "2022-03-27",
        "likes": 0,
        "image": false,
        "imageLink": []
    },
    {
        "articleId": 3,
        "title": "Test",
        "brief": "this is a test",
        "article": "hello i`m Jlunlun",
        "publishTime": "2022-03-27",
        "likes": 0,
        "image": true,
        "imageLink": [
            "https://tour-article.oss-cn-beijing.aliyuncs.com/2022/03/27/61131a8b-1362-4b22-bc4f-015089576e22.jpg",
            "https://tour-article.oss-cn-beijing.aliyuncs.com/2022/03/27/a33b8712-a352-41d2-aad1-41b9887c482d.jpg"
        ]
    }
]

// for (let i = 0; i < 23; i++) {
//     listData.push({
//         href: 'https://ant.design',
//         title: `ant design part ${i}`,
//         avatar: 'https://joeschmoe.io/api/v1/random',
//         description:
//             'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//         content:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut error, asperiores necessitatibus dicta repellat rem voluptates possimus culpa, ratione veritatis quaerat. Culpa esse officia nulla aspernatur, odio obcaecati reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut error, asperiores necessitatibus dicta repellat rem voluptates possimus culpa, ratione veritatis quaerat. Culpa esse officia nulla aspernatur, odio obcaecati reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut error, asperiores necessitatibus dicta repellat rem voluptates possimus culpa, ratione veritatis quaerat. Culpa esse officia nulla aspernatur, odio obcaecati reiciendis ",
//         imgLinks: ["https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random",]
//     });

// }

const IconText = ({ icon, text }: Icon) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const ContentList = () => {

    const { state, dispatch } = useModel('home')
    const listData = state.get('articles').toJS().length === 0 ? mockData : state.get('articles').toJS()
    const avatar = "'https://joeschmoe.io/api/v1/random"
    const href = "https://ant.design"

    useEffect(() => {
        // dispatch.getArticles()
        console.log(listData)
    }, [])
    return (
        <div className="content-list">
            <List
                itemLayout="vertical"
                size="large"
                dataSource={listData}
                renderItem={(item: any) => (
                    <ContentCard
                        key={item.articleId}
                        imgLinks={item.imageLink}
                        title={item.title}
                        description={item.publishTime}
                        content={item.article}
                        // brief={item.brief}
                        avatar={avatar}
                        href={href} />
                )}
            />

        </div>
    )
}

export default ContentList
