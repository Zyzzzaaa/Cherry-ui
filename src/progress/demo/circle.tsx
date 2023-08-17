/**
 * title: 圆形进度条
 * description: 通过`circle`属性来选择是否选择圆形进度条，同样有五种主题可以选择。
 */
 import React from "react"
 import { Progress } from "cherry-ui"
 
 export default () => {
     return (
        <div>
        <Progress max={100} percent={20} circle={true}></Progress>
        <Progress max={100} percent={30} theme="link" circle={true}></Progress>
        <Progress max={100} percent={40} theme="warning" circle={true}></Progress>
        <Progress max={100} percent={50} theme='danger' circle={true}></Progress>
        <Progress max={100} percent={60} theme="success" circle={true}></Progress>
     </div>
     )
 }