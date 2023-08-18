/**
 * title: 垂直排列
 * description: 可以通过设置`direction`来控制元素垂直排列。
 */
import React from "react"
import { Space,Button } from "cherry-ui-react";

export default () => {
    return (
        <Space direction="column">
            <Button type="primary">primary</Button>
            <Button type='success'>success</Button>
            <Button type='danger'>danger</Button>
        </Space>
    )
}