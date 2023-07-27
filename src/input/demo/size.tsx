/**
 * title: 多个尺寸的输入框
 * description: 一个简单的输入框，支持 HTMLInput 的所有基本属性。
 */
 import React from "react"
 import {Input} from "cherry-ui"
 
 export default ()=>{
     return (
        <div>
            <Input size="small" placeholder="我是小号输入框"></Input>
            <Input></Input>
            <Input size="large" placeholder="我是大号输入框"></Input>
        </div>
     )
 }