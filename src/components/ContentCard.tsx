import React, { useState } from 'react'
import { Carousel, Avatar, List, Space, Tag, Image, message } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { RequestOption, requestWithFormDataInToken } from '../utils/request'
import { requestWithToken } from '../utils/request'


// interface UserIcon {
//     avatar: string,
//     title: string,
//     description: string
//     href: string
// }
interface ContentCard {
    imgLinks?: string[],
    avatar: string,
    title: string,
    description: string,
    href: string,
    content: string,
    likes: string,
    userIcon: string
    articleId: number


}
interface Icon {
    icon: string,
    text: string
}
function onChange(currentSlideNumber: number) {
    console.log(currentSlideNumber);
}

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    background: '#364d79',
};




const ContentCard = (props: ContentCard) => {
    const [likes, setLikes] = useState(props.likes || '0')
    const [liked, setLiked] = useState(false)
    const IconText = ({ icon, text }: Icon) => (
        <Space className={liked && icon === 'like' ? "liked" : ""}>
            {icon === 'like' ? <LikeOutlined onClick={likeArticle} /> : <MessageOutlined />}
            {text}
        </Space>
    );
    return (
        <List.Item
            actions={[
                <IconText icon='like' text={likes} key="list-vertical-like-o" />,
                <IconText icon='message' text="2" key="list-vertical-message" />,
            ]}
        >
            <List.Item.Meta
                avatar={<Avatar src={props.userIcon} />}
                title={<a href={props.href} >{props.title}</a>}
                description={props.description}
            />
            <div className='content-card'>
                <div className="content-tag">
                    <Tag color="magenta">#长沙</Tag>
                    <Tag color="red">#新疆</Tag>
                    <Tag color="volcano">#音乐</Tag>
                    <Tag color="orange">#游记</Tag>
                    <Tag color="gold">#泼水节</Tag>
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="content-picture">
                    {
                        props.imgLinks ? props.imgLinks.map((i, index) => {
                            return <div key={index} style={{ marginLeft: '10px' }}><Image
                                src={i}
                                width={240}
                            ></Image></div>
                        }) : null
                    }
                </div>

            </div >
        </List.Item >

    )

    function likeArticle() {
        if (liked) {
            setLikes((parseInt(likes) - 1).toString())


        } else {
            sendLikeRequest()

            // sendLikeRequest().then(
            //     // setLikes((parseInt(likes) + 1).toString())
            //     {
            //         console.log)
            //     }


            // )
        }
        setLiked(!liked)

    }

    async function sendLikeRequest() {
        const requestOption: RequestOption = {
            method: 'POST',
            url: '/like/likeArticle',
            endpoint: "http://8.130.19.187:8083",
            payload: { id: props.articleId }

        }
        const { success, errorMessage } = await requestWithFormDataInToken(requestOption)
        if (success) {

            setLikes((parseInt(likes) + 1).toString())
            message.success("点赞+1！")
        }

    }
}

export default ContentCard
