import React from 'react'
import { List as ReactList, Avatar, Space, Skeleton, Spin } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { ContentCardType } from './ContentCard'
import { useModel } from '../hooks/use-model';
import ContentCard from './ContentCard';


interface Icon {
    icon: any,
    text: string
}

interface Props {
    content: ContentCardType[],
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
                    renderItem={(item: ContentCardType) => (

                        <ContentCard
                            // key={item.articleId}
                            // imgLinks={item.imageLink}
                            // title={item.title}
                            // description={item.publishtime}
                            // content={item.article}
                            // // brief={item.brief}
                            // articleId={item.articleId}
                            // userIcon={item.userIcon}
                            // avatar={avatar}
                            // href={href}
                            // likes={item.likes} 
                            {...item}

                        />



                    )}
                />



            </div>
        </Spin>
    )
}

export default ContentList
