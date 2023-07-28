/**
 * title: 禁用输入框
 * description: 通过设置`disabled`属性来设置输入框是否禁用
 */
 import React from "react"
 import {Input} from "cherry-ui"
 
 export default ()=>{
     return (
        <Input disabled={true} placeholder="我是禁用输入框"></Input>
     )
 }