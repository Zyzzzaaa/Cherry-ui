import React from 'react';
import './style/index.less';
interface BaseMenuProps {
    defaultIndex?: string;
    mode?: 'horizontal' | 'vertical';
    onSelect?: (index: string) => void;
    defaultOpen?: string[];
    style?: React.CSSProperties;
}
type NativeMenuProps = BaseMenuProps & React.HTMLAttributes<HTMLElement>;
export type MenuProps = Partial<NativeMenuProps>;
interface IMenuContext {
    index: string;
    onSelect?: (selectedIndex: string) => void;
    mode?: 'horizontal' | 'vertical';
    defaultOpen?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
