import React from "react";
import 'rc-trigger/assets/index.css';
import './style/index.less';
export interface DropDownProps {
    children: React.ReactElement;
    items: any;
    trigger?: 'click' | 'hover';
    popupPlacement?: 'bottom' | 'left' | 'right' | 'top' | 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
}
export interface MenuPops {
    items: {
        content: string;
        className: 'menu-item' | 'menu-item-forbidden';
    }[];
}
declare const DropDown: React.FC<DropDownProps>;
export default DropDown;
