import React from 'react'
import { List as ReactList, Spin } from 'antd';
import { ContentCardType } from './ContentCard'
import ContentCard from './ContentCard';

interface Props {
    content: ContentCardType[],
    loading: boolean,
    edit: boolean
    onClickEdit?: () => void

}
const ContentList = (props: Props) => {
    const listData = props.content
    return (
        <Spin spinning={props.loading}>
            <div className="content-list">
                <ReactList
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    renderItem={(item: ContentCardType) => {
                        item.edit = props.edit
                        if (props.onClickEdit) {
                            item.onClickEdit = props.onClickEdit
                        }
                        return (<ContentCard
                            {...item}
                        />)
                    }}
                />
            </div>
        </Spin>
    )
}



export default ContentList
