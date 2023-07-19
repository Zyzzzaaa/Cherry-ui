import React, { useContext, useState } from "react";
import classNames from 'classnames';
import { MenuContext } from ".";
import { DownOutlined } from "cherry-ui/icons";

export interface BaseSubMenuProps {
    index?: string;
    title?: string;
}

type NativeSubMenuProps = BaseSubMenuProps & React.HTMLAttributes<HTMLElement>
export type SubMenuProps = Partial<NativeSubMenuProps>;

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const {index, title, children} = props
    const context = useContext(MenuContext);
    const isOpened = false;
    const [menuOpen, setOpen] = useState(isOpened);
    const classes = classNames('menu-item submenu-item',{
        'is-active': context.index == index,
        'is-opened': menuOpen,
        'is-vertical': context.mode == 'vertical'
    })

    // 节流
    const throttleMouse = (event:React.MouseEvent,flag:boolean)=>{
        let timer: NodeJS.Timeout | null = null;
        return ()=>{
            if(!timer){
                timer = setTimeout(()=>{
                    setOpen(flag);
                    timer = null
                },300)
            }
        }
    }

    // 水平hover展开子菜单
    const hoverEvents = context.mode !== 'vertical'?{
        onMouseEnter:(event:React.MouseEvent)=>{throttleMouse(event,true)},
        onMouseLwave:(event:React.MouseEvent)=>{throttleMouse(event,false)}
    }:{}

    const renderChildren = () => {
        const subMenuClasses = classNames('cherry-submenu',{
            'menu-opened': menuOpen,
            'cherry-submenu-vertical': context.mode == 'vertical',
            'submenu-item-horizontal': context.mode !== 'vertical'
        })
    }

    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title">{title}<DownOutlined></DownOutlined></div>

        </li>
    )
}

export default SubMenu