import { DropDown, Button } from "cherry-ui";

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
            <DropDown items={menu}>
                <Button>移入</Button>
            </DropDown>
            <DropDown items={menu}>
                <Button>点击</Button>
            </DropDown>
        </div>

    )
}