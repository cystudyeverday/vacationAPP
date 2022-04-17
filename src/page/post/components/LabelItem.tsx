import React, { useState } from 'react'
import { Select, Tag } from 'antd';

interface Props {
    value?: any,
    onChange?: () => any
}

const LabelItem = (props: Props) => {
    const mockOptions = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }]
    const [options, setOptions] = useState(props.value || [{ value: '游玩' }])
    return (
        <div>
            <Select
                mode="multiple"
                //  can not use this props. will cause bug
                //open={false}
                dropdownStyle={{ display: 'none' }}
                labelInValue={true}
                tagRender={tagRender}
                defaultValue={['游玩',]}
                style={{ width: '100%' }}
                options={options}
                onChange={onChange}
                onSearch={onSearch}

            />

        </div>
    )
    function tagRender(props: any) {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = (event: any) => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color={'blue'}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{ marginRight: 3 }}

            >
                {label}
            </Tag>
        );
    }

    function onChange(value: any, option: any) {

        console.log(value)
        console.log(option)

    }

    function onSearch(value: string) {
        console.log(value)
        setOptions([...options, { value }])
    }


}

export default LabelItem
