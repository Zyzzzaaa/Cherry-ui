/**
 * title: 跳转方式
 * description: 通过设置`target`属性来设置跳转方式，`_blank`在新标签页打开，`_self`在当前页面打开。 
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
         <Breadcrumb objects={obj} target='_blank'></Breadcrumb>
     )
 }