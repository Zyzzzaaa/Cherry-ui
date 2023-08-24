/**
 * title: 基础选择框
 * description: 一个简单的输入框，使用`checked`属性来控制是否默认选中。
 */
 import React from "react"
 import { CheckBox } from "cherry-ui-react"
 
 export default ()=>{
     return (
        <>
            <CheckBox>选择框</CheckBox>
            <CheckBox checked={true}>默认选中</CheckBox>
        </>
     )
 }