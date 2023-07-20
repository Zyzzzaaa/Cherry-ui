import React, { createContext, useState } from 'react';
import classNames from 'classnames';
import MenuItem, { type MenuItemProps } from "./menuItem";
import './style/index.less'
import Alert from 'cherry-ui/alert';

// 整体父组件的props
interface BaseMenuProps {
    defaultIndex?: string;
    mode?: 'horizontal' | 'vertical';
    onSelect?: (index: string) => void;
    // 纵向模式下，设置子菜单默认打开
    defaultOpen?: string[];
    style?: React.CSSProperties;
}
type NativeMenuProps = BaseMenuProps & React.HTMLAttributes<HTMLElement>;
export type MenuProps = Partial<NativeMenuProps>;

// 要传递给子组件的props
interface IMenuContext {
    index: string;
    onSelect?: (selectedIndex: string) => void;
    mode?: 'horizontal' | 'vertical';
    defaultOpen?: string[];
}
export const MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu: React.FC<MenuProps> = (props) => {
    const { defaultIndex, children, mode, onSelect, style, className } = props;
    const [currentIndex, setCurrentIndex] = useState(defaultIndex)

    const classes = classNames('cherry-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })

    // 要传递的函数
    const handleClick = (index: string) => {
        setCurrentIndex(index);
        onSelect && onSelect(index)
    }
    // 要传递的value
    const passedContext: IMenuContext = {
        index: currentIndex ? currentIndex : '0',
        onSelect: handleClick,
        mode,
    }

    // 遍历生成menuItem组件
    const childrenRender = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type//解构幅值
            if (displayName == 'MenuItem' || displayName == 'SubMenu') {
                return React.cloneElement(childElement, {
                    index: index.toString(),
                })
            } else {
                return <Alert title="警告提示" type="warning" closeable={true}>Menu has a child which is not a MenuItem component</Alert>
            }
        })
    }

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
                {childrenRender()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps={
    mode:'horizontal',
    defaultIndex:'0'
}

export default Menu

