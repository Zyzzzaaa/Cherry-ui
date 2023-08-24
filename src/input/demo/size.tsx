/**
 * title: 多个尺寸的输入框
 * description: 可以设置 size 属性改变输入框的大小。
 */
 import React from "react"
 import {Input} from "cherry-ui-react"
 
 export default ()=>{
     return (
        <div>
            <Input size="small" placeholder="我是小号输入框"></Input>
            <Input></Input>
            <Input size="large" placeholder="我是大号输入框"></Input>
        </div>
     )
 }