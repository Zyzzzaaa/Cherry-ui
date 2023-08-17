/**
 * title: 进度条内演示文字
 * description: 通过`inner`属性来选择进度文字是否在进度条内显示。
 */
 import React from "react"
 import { Progress } from "cherry-ui"
 
 export default () => {
     return (
         <Progress inner={true} max={100} percent={50}></Progress>
     )
 }