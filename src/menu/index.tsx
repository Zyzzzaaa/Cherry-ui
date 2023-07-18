import React, { createContext } from 'react';
import classNames from 'classnames';
import MenuItem, { type MenuItemProps } from "./menuItem";
import './style/index.less'

interface BaseMenuProps {
    defaultIndex?:string;

}

type NativeMenuProps = BaseMenuProps & React.HTMLAttributes<HTMLElement>;
export type MenuProps = Partial<NativeMenuProps>;

interface IMenuContext {
    index:string;
    onSelect?:(selectedIndex: string) => void;
    mode?:'horizontal' | 'vertical';
    defaultOpenSubMenus?:string[];
}
export const MenuContext = createContext<IMenuContext>({index:'0'})

const Menu:React.FC<MenuProps> = (props)=>{
    const {defaultIndex,}=props;

    // 遍历生成menuItem组件
    const childrenRender = () => {
        
    }

    return (
        <div></div>
    )
}

export default Menu