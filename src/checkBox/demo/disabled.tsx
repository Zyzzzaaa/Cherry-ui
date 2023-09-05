/**
 * title: 禁用选择框
 * description: 支持禁用功能，使用`disabled`属性来控制是否将选项禁用。
 */
 import React from "react"
 import { CheckBox } from "cherry-ui-react"
 
 export default ()=>{
     return (
        <CheckBox disabled={true}>选择框</CheckBox>
     )
 }