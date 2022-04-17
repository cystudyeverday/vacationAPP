import React, { useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import NavBar from '../../components/NavBar'
import ContentList from '../../components/ContentList'
import './index.css'
import { useModel } from '../../hooks/use-model';
import { List } from 'immutable'

const HomePage = () => {
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

    for (let i = 0; i < 23; i++) {
        mockData.push({
            // href: 'https://ant.design',
            articleId: i + 100,
            title: `ant design part ${i}`,
            // avatar: 'https://joeschmoe.io/api/v1/random',
            publishTime: "2022-03-27",
            likes: 0,
            brief:
                'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            "image": true,
            article:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut error, asperiores necessitatibus dicta repellat rem voluptates possimus culpa, ratione veritatis quaerat. Culpa esse officia nulla aspernatur, odio obcaecati reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut error, asperiores necessitatibus dicta repellat rem voluptates possimus culpa, ratione veritatis quaerat. Culpa esse officia nulla aspernatur, odio obcaecati reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut error, asperiores necessitatibus dicta repellat rem voluptates possimus culpa, ratione veritatis quaerat. Culpa esse officia nulla aspernatur, odio obcaecati reiciendis ",
            imageLink: ["https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random", "https://joeschmoe.io/api/v1/random",]
        });

    }

    const { state, dispatch } = useModel('home')
    //const listData = state.get('articles', List()).toJS().length === 0 ? mockData : state.get('articles').toJS()
    const listData = state.get('articles', List()).toJS()
    console.log(listData)


    useEffect(() => {
        dispatch.getArticles()

    }, [])

    return (

        <NavBar>
            <div className='home-page'>
                <ContentList content={listData} loading={state.get('loading')} />
            </div>
        </NavBar>

    )
}

export default HomePage
