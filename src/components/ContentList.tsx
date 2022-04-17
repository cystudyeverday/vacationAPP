import React from 'react'
import { List as ReactList, Avatar, Space, Skeleton, Spin } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import ContentCard from './ContentCard'
import { useModel } from '../hooks/use-model';


interface Icon {
    icon: any,
    text: string
}
interface ContentList {
    articleId: number,
    title: string,
    brief: string,
    article: string,
    publishtime: string,
    likes: string,
    image?: boolean,
    userIcon: string,
    imageLink?: string[]
}

interface Props {
    content: ContentList[],
    loading: boolean

}

const IconText = ({ icon, text }: Icon) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const ContentList = (props: Props) => {
    const listData = props.content

    const { state, dispatch } = useModel('home')

    // const listData = state.get('articles', List()).toJS().length === 0 ? mockData : state.get('articles').toJS()
    //const listData = mockData
    // const listData = state.get('articles', List()).toJS()
    //console.log(listData)
    const avatar = "'https://joeschmoe.io/api/v1/random"
    const href = "https://ant.design"



    return (
        <Spin spinning={props.loading}>
            <div className="content-list">
                <ReactList
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    renderItem={(item: ContentList) => (

                        <ContentCard
                            key={item.articleId}
                            imgLinks={item.imageLink}
                            title={item.title}
                            description={item.publishtime}
                            content={item.article}
                            // brief={item.brief}
                            userIcon={item.userIcon}
                            avatar={avatar}
                            href={href}
                            likes={item.likes} />



                    )}
                />



            </div>
        </Spin>
    )
}

export default ContentList
