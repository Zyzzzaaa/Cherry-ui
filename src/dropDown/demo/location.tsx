/**
 * title: 弹出位置
 * description: 支持八个弹出位置
 */
import { DropDown, Button } from "cherry-ui-react";
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
        className: "menu-item",
    }
]

export default () => {
    return (
        <div>
            <DropDown items={menu} trigger="hover" popupPlacement="bottom"><Button>bottom</Button></DropDown>
            <DropDown items={menu} trigger="hover" popupPlacement="left"><Button>left</Button></DropDown>
            <DropDown items={menu} trigger="hover" popupPlacement="top"><Button>top</Button></DropDown>
            <DropDown items={menu} trigger="hover" popupPlacement="right"><Button>right</Button></DropDown>
            <DropDown items={menu} trigger="hover" popupPlacement="bottomRight"><Button>bottomRight</Button></DropDown>
            <DropDown items={menu} trigger="hover" popupPlacement="topRight"><Button>topRight</Button></DropDown>
            <DropDown items={menu} trigger="hover" popupPlacement="bottomLeft"><Button>bottomLeft</Button></DropDown>
            <DropDown items={menu} trigger="hover" popupPlacement="topLeft"><Button>topLeft</Button></DropDown>
        </div>

    )
}