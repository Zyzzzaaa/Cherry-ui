import { DropDown, Button } from "cherry-ui";
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
        className: "menu-item"
    }
]

export default () => {
    return (
        <div>
            <DropDown items={menu} trigger='hover'>
                <Button>移入</Button>
            </DropDown>
            <DropDown items={menu} trigger='click'>
                <Button>点击</Button>
            </DropDown>
        </div>

    )
}