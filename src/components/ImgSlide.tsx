import React from 'react'
import { Carousel, Avatar, List, Space } from 'antd';
interface Props {
    imgLinks: string[]

}
const ImgSlide = (props: Props) => {
    return (
        <Carousel autoplay>
            {
                props.imgLinks.map((i, index) => {
                    return <div className="img-slide" key={index} ><img src={i}></img></div>
                })
            }
        </Carousel>
    )
}

export default ImgSlide
