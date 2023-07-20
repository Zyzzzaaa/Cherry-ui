/**
 * title: 基础面包屑
 * description: 通过差UN构建一个IE对象数组来使用面包屑组件。 
 */
import React from 'react';
import { Breadcrumb, ObjectsType } from 'cherry-ui';

export default () => {
    const obj: ObjectsType[] = [
        {
            text: '首页',
            link: '/'
        },
        {
            text: '文档',
            link: '/guide'
        },
        {
            text: '面包屑',
            link: '/components/breadcrumb'
        },
    ]
    return (
        <Breadcrumb objects={obj}></Breadcrumb>
    )
}