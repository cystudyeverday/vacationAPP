import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
interface Props {
    text: string,
    time: number,
    onClick?: () => void
}
const TimeoutButton = (props: Props) => {
    const [time, setTime] = useState(props.time)
    const [disable, setDisable] = useState(false)
    let intervalId: any;

    useEffect(() => {
        if (time === 0) {
            clearInterval(intervalId)
            intervalId = null
            setDisable(false)
        }
    }, [time])

    return (
        <Button disabled={disable} onClick={handleClick}>
            {disable ? `${time} s` : props.text}
        </Button>

    )

    function handleClick() {
        if (!intervalId) {
            setTime(props.time)
            setDisable(true)
            intervalId = setInterval(decreaseTimer, 1000);
            if (typeof (props.onClick) === 'function') {
                props.onClick()
            }
        }
    }

    function decreaseTimer() {
        if (time > 0) {
            setTime(time => --time)
        }
    }
}

export default TimeoutButton
