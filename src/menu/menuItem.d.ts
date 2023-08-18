import React from "react";
export interface BaseMenuItemProps {
    index?: string;
    disabled?: boolean;
    className?: string;
}
type NativeMenuItemProps = BaseMenuItemProps & React.HTMLAttributes<HTMLElement>;
export type MenuItemProps = Partial<NativeMenuItemProps>;
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
