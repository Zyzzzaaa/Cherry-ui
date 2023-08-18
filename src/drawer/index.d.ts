import React from 'react';
import './style/index.less';
interface DrawerDefaultProps {
    close?: boolean;
    onClose: (event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    inline?: boolean;
    open?: boolean;
    rootClassname?: string;
    rootStyle?: React.CSSProperties;
    zIndex?: number;
    title?: string;
    children?: React.ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    maskCloseable?: boolean;
}
type NativeDrawer = DrawerDefaultProps & React.HTMLAttributes<HTMLElement>;
export type DrawerProps = Partial<NativeDrawer>;
declare const Drawer: React.FC<DrawerProps>;
export default Drawer;
