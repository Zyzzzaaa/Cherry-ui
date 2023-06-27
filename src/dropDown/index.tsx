import React, { FC } from "react";
import Trigger from 'rc-trigger';
import 'rc-trigger/assets/index.css';


export interface DropDownProps{ 
    children: React.ReactElement,
}

export interface MenuPops{}

const Menu:React.FC<MenuPops>=({})=>{
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
