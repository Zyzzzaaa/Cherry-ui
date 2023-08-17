/**
 * title: 对齐方式
 * description: 可以通过改变`side`的值来设置对齐方式，可以靠左对齐，居中显示，靠右对齐。
 */
import React from "react"
import { Space, Button, Divider } from "cherry-ui"

export default () => {
    return (
        <div>
            <Space>
                <Button type="primary">primary</Button>
                <Button type='success'>success</Button>
                <Button type='danger'>danger</Button>
            </Space>
            <Divider></Divider>
            <Space side="center">
                <Button type="primary">primary</Button>
                <Button type='success'>success</Button>
                <Button type='danger'>danger</Button>
            </Space>
            <Divider></Divider>
            <Space side="right">
                <Button type="primary">primary</Button>
                <Button type='success'>success</Button>
                <Button type='danger'>danger</Button>
            </Space>
        </div>
    )
}