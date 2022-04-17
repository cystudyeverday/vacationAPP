import React, { useState } from 'react'
import { Tag, Input, message } from 'antd'
import './index.css'

interface Props {
    initLabels?: string[],
    value?: string[]
    onChange?: (value: any) => any
}
const MyLabelItem = (props: Props) => {
    const [value, setValue] = useState(props.value || [])
    const [inputValue, setInputValue] = useState('')

    return (
        <div className='my-label-item'>
            <div className="label-input">
                <Input
                    placeholder='输入后点击回车生成标签'

                    onPressEnter={onPressEnter}
                    value={inputValue}
                    onChange={onInputChange}
                >
                </Input>
            </div>
            <div className="label-box">
                {value.map(v => {

                    return renderTag(v)
                })}
            </div>


        </div>
    )

    function renderTag(label: string) {
        return (
            <Tag
                color={'blue'}
                closable={true}
                onClose={e => {
                    e.preventDefault();
                    closeTag(label)

                }}
                style={{ marginRight: 3 }}

            >
                {label}
            </Tag>
        );
    }

    function closeTag(label: string) {

        const filterTag = value.filter(v => v !== label)
        setValue(filterTag)
        props.onChange?.(filterTag.join(','))


    }

    function onPressEnter(e: any) {
        const inputValue = e.target.value?.trim()
        if (!value.includes(inputValue)) {

            props.onChange?.([...value, inputValue].join(','))
            setValue([...value, inputValue])
            setInputValue('')
        } else {
            message.error("这个标签你已经添加啦,换个新的试试")

        }
        // or the from will submit iteslf
        e.preventDefault()

    }

    function onInputChange(e: any) {
        setInputValue(e.target.value)

    }

}

export default MyLabelItem