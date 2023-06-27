import React, { FC } from "react";
import Trigger from 'rc-trigger';
import 'rc-trigger/assets/index.css';


export interface DropDownProps{ 
    children: React.ReactElement,
}

export interface MenuPops{
    items?:{
        content:string,
        className: 'menu-item' | 'menu-item-forbidden',
        childrens: any
    }
}

const Menu:React.FC<MenuPops>=({items})=>{
    return(
        <div></div>
    )
}

const DropDown: React.FC<DropDownProps> = ({
    children
}) => {

    return(
        <Trigger
        popup = {<Menu></Menu>}
        >
            {children}
        </Trigger>
    )
}

export default DropDown;
