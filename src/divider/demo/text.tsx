/**
 * title: 文本
 * description: 我们允许在分割线中间添加文字，文本颜色默认与分割线颜色一致。
 */
import React from 'react'
import { Divider } from 'cherry-ui-react'

export default () => {
    return (
        <div>
            <Divider text='primary'></Divider>
            <Divider text='info' style='info'></Divider>
            <Divider text='warning' style='warning'></Divider>
            <Divider text='danger' style='danger'></Divider>
            <Divider text='link' style='link'></Divider>
        </div>
    )
}