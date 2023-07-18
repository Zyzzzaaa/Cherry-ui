import React, { useContext } from "react";
import classNames from 'classnames';
import { MenuContext } from ".";

export interface BaseMenuItemProps {
    index?:string;
    disabled?:boolean;
    className?:string;
}
type NativeMenuItemProps = BaseMenuItemProps & React.HTMLAttributes<HTMLElement>;
export type MenuItemProps = Partial<NativeMenuItemProps>

const MenuItem:React.FC<MenuItemProps> = (props) => {
    const {index, disabled, children, className}=props;
    const context = useContext(MenuContext)
    const classes = classNames('menu-item',className,{
        'is-disabled': disabled,
        'is-acitve': context.index == index
    })
    const handleClick = () => {
        if (context.onSelect && !disabled && (typeof index == 'string')){
            context.onSelect(index)
        }
    }
    return (
        <li className={classes} onClick={handleClick}>
            {children}
        </li>
    )
}

export default MenuItem