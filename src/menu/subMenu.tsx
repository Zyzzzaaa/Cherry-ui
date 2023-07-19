import React, { useState } from "react";
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
    return (
        <li>

        </li>
    )
}

export default SubMenu