/**
 * title: 基础进度条
 * description: 有五种主题：`primary`、`link`、`warning`、`danger`、`success`支持选择。
 */
 import React from "react"
 import {Progress} from "cherry-ui"
 
 export default ()=>{
     return (
         <div>
            <Progress max={100} percent={20}></Progress>
            <Progress max={100} percent={30} theme="link"></Progress>
            <Progress max={100} percent={40} theme="warning"></Progress>
            <Progress max={100} percent={50} theme='danger'></Progress>
            <Progress max={100} percent={60} theme="success"></Progress>
         </div>
     )
 }