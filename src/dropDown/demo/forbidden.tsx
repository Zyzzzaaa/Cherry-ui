/**
 * title: 禁选项
 * description: 可以使用`menu-item-forbidden`类名来配置弹出菜单内容是否禁选。
 */
import { DropDown, Button } from 'cherry-ui-react'
import React from "react";

const menu = [
    {
        content: "1st menu item",
        className: "menu-item"
    },
    {
        content: "2nd menu item",
        className: "menu-item"
    },
    {
        content: "3rd menu item",
        className: "menu-item-forbidden"
    }
]

export default () => {
    return <DropDown items={menu}>
        <Button>支持禁用功能</Button>
    </DropDown>
}