/**
 * title: 基础输入框
 * description: 一个简单的输入框，支持 HTMLInput 的所有基本属性。
 */
 import React from "react"
 import {Input} from "cherry-ui-react"
 
 export default ()=>{
     return (
        <Input prepend='http://' append='.com' placeholder="请输入网站"></Input>
     )
 }