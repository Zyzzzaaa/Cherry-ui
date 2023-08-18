import React from "react";
export interface BaseSubMenuProps {
    index?: string;
    title?: string;
}
type NativeSubMenuProps = BaseSubMenuProps & React.HTMLAttributes<HTMLElement>;
export type SubMenuProps = Partial<NativeSubMenuProps>;
declare const SubMenu: React.FC<SubMenuProps>;
export default SubMenu;
