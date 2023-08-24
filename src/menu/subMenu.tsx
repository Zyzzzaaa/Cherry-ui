import React, { FunctionComponentElement, useContext, useState } from "react";
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group'
import { MenuContext } from ".";
import { DownOutlined } from "cherry-ui/icons";
import { MenuItemProps } from "./menuItem";

export interface BaseSubMenuProps {
    index?: string;
    title?: string;
}

type NativeSubMenuProps = BaseSubMenuProps & React.HTMLAttributes<HTMLElement>
export type SubMenuProps = Partial<NativeSubMenuProps>;

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const { index, title, children } = props
    const context = useContext(MenuContext);
    const isOpened = false;
    const [menuOpen, setOpen] = useState(isOpened);
    const classes = classNames('menu-item submenu-item', {
        'is-active': context.index == index,
        'is-opened': menuOpen,
        'is-vertical': context.mode == 'vertical'
    })

    // 节流
    const throttleMouse = (event: React.MouseEvent, flag: boolean) => {
        let timer: NodeJS.Timeout | null = null;
        if (!timer) {
            timer = setTimeout(() => {
                setOpen(flag);
                timer = null
            }, 200)
        }
    }

    // 水平hover展开子菜单
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (event: React.MouseEvent) => { throttleMouse(event, true) },
        onMouseLeave: (event: React.MouseEvent) => { throttleMouse(event, false) }
    } : {}

    // 渲染子菜单
    const renderChildren = () => {
        const subMenuClasses = classNames('cherry-submenu', {
            'menu-opened': menuOpen,
            'cherry-submenu-vertical': context.mode == 'vertical',
            'submenu-item-horizontal': context.mode !== 'vertical'
        })
        // 循环遍历生成带有index属性的元素
        const childrenComponent = React.Children.map(children, (child, i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            if (childElement.type.displayName == 'MenuItem') {
                return React.cloneElement(childElement, {
                    index: `${index}-${i}`
                })
            } else {
                console.error('Menu has a child which is not a MenuItem component')
            }
        })
        // 返回子菜单
        return (
            <>{ menuOpen && (<CSSTransition in={menuOpen} timeout={300} classNames='cherry-subMenu-ul'>
                <ul className={subMenuClasses}>
                    {childrenComponent}
                </ul>
            </CSSTransition>)}</>
        )
    }

return (
    <li key={index} className={classes} {...hoverEvents}>
        <div className="submenu-title" onClick={() => setOpen(!menuOpen)}>{title}<DownOutlined></DownOutlined></div>
        {renderChildren()}
    </li>
)
}

SubMenu.displayName = 'SubMenu'
export default SubMenu