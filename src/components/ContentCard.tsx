import React, { useState } from 'react'
import { Avatar, List, Space, Tag, Image, message } from 'antd';
import { MessageOutlined, LikeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { RequestOption, requestWithFormDataInToken } from '../utils/request'
import moment from 'moment'
import { useModel } from '../hooks/use-model';
import { fromJS } from 'immutable'
import useHistory from '../hooks/use-history';


interface userDTO {
    background: string,
    beLiked: string,
    email: string,
    phone: string | null,
    userIcon: string,
    username: string
}
export interface ContentCardType {
    imageLink?: string[],
    avatar: string,
    title: string,
    brief: string,
    href: string,
    article: string,
    likes: string,
    userIcon: string
    articleId: number,
    userDTO: userDTO,
    publishTime: string,
    likeOrNot: boolean,
    label?: string,
    onClickLike?: () => void,
    onClickEdit?: () => void

    edit: boolean
}
interface Icon {
    icon: string,
    text: string
}

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    background: '#364d79',
};


const ContentCard = (props: ContentCardType) => {
    const [likes, setLikes] = useState(props.likes || '0')
    const [liked, setLiked] = useState(props.likeOrNot)
    const { dispatch } = useModel('post')
    const { gotoPage } = useHistory()
    const IconText = ({ icon, text }: Icon) => (
        <Space className={liked && icon === 'like' ? "liked" : ""}>
            {icon === 'like' ? <LikeOutlined onClick={likeArticle} /> : <MessageOutlined />}
            {text}
        </Space>
    );
    const actions = props.edit ? [

        <IconText icon='like' text={likes} key="list-vertical-like-o" />,
        <IconText icon='message' text="2" key="list-vertical-message" />,
        <EditOutlined onClick={onClickEdit} style={{ color: "#52c42a" }} />,
        <DeleteOutlined onClick={onClickEdit} style={{ color: "red" }} />,

    ] : [
        <IconText icon='like' text={likes} key="list-vertical-like-o" />,
        <IconText icon='message' text="2" key="list-vertical-message" />,
    ]
    return (
        <List.Item
            actions={actions}
            key={`list-item-key-${props.articleId}`}
        >
            <List.Item.Meta
                avatar={<Avatar src={props.userDTO.userIcon} />}
                title={<a href={props.href} >{props.title}</a>}
                description={moment(props.publishTime).format('YYYY-MM-DD')}
            />
            <div className='content-card'>
                <div className="content-tag">
                    <Tag color="magenta">#??????</Tag>
                    <Tag color="red">#??????</Tag>
                    <Tag color="volcano">#??????</Tag>
                    <Tag color="orange">#??????</Tag>
                    <Tag color="gold">#?????????</Tag>
                </div>
                <div className="content">
                    {props.article}
                </div>
                <div className="content-picture">
                    {
                        props.imageLink?.map((i, index) => {
                            return <div key={index} style={{ marginLeft: '10px' }}><Image
                                src={i}
                                width={240}
                            ></Image></div>
                        })
                    }
                </div>
            </div >
        </List.Item >

    )
    //--------------------------------------------------------------------------------------------------
    function likeArticle() {
        if (liked) {
            //not allowwed to cancel the like yet
            setLikes((parseInt(likes) - 1).toString())
            sendLikeRequest(false)
        } else {
            setLikes((parseInt(likes) + 1).toString())
            sendLikeRequest(true)
        }
        setLiked(!liked)

    }

    //--------------------------------------------------------------------------------------------------
    async function sendLikeRequest(like: boolean) {
        const requestOption: RequestOption = {
            method: 'POST',
            url: '/like/likeArticle',
            endpoint: "http://8.130.19.187:8083",
            payload: { id: props.articleId }

        }
        const { success } = await requestWithFormDataInToken(requestOption)
        if (success) {
            if (like) {
                message.success("??????+1???")
            }
            else {
                message.error("???????????????????????????")
            }
        }
        else {
            message.error("????????????????????????????????????")
            if (like) {
                setLikes((parseInt(likes) - 1).toString())
            } else {
                setLikes((parseInt(likes) + 1).toString())

            }
            setLiked(!liked)

        }

    }

    //--------------------------------------------------------------------------------------------------
    function onClickEdit() {
        const formData = {
            title: props.title,
            brief: props.brief,
            article: props.article,
            file: props.imageLink?.map((link, i) => ({
                uid: `img-${props.articleId}`,
                name: `article${props.articleId}-img-${i}`,
                status: 'done',
                url: link
            })) || [],
            label: props.label
        }
        dispatch.set(['mode', 'edit'])
        dispatch.set(['form', fromJS(formData)])
        gotoPage('/post')


    }
}

export default ContentCard
