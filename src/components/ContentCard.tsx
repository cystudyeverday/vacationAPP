import React from 'react'
import { Carousel, Avatar, List, Space, Tag } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


// interface UserIcon {
//     avatar: string,
//     title: string,
//     description: string
//     href: string
// }
interface ContentCard {
    imgLinks: string[],
    avatar: string,
    title: string,
    description: string,
    href: string,
    content: string

}
interface Icon {
    icon: any,
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

const IconText = ({ icon, text }: Icon) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);


const ContentCard = (props: ContentCard) => {
    return (
        <List.Item
            actions={[
                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
        >

            <List.Item.Meta
                avatar={<Avatar src={props.avatar} />}
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
                            return <div key={index}><img src={i} style={{ height: "200px" }}></img></div>
                        }) : null
                    }
                </div>



            </div >
        </List.Item >
    )
}

export default ContentCard
