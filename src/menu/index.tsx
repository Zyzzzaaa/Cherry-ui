import React, { createContext, useState} from 'react';
import classNames from 'classnames';
import MenuItem, { type MenuItemProps } from "./menuItem";
import './style/index.less'
import Alert from 'cherry-ui/alert';

// 整体父组件的props
interface BaseMenuProps {
    defaultIndex?:string;
    mode?:'horizontal' | 'vertical';
    onSelect?:(selectedIndex: string)=>void,
}
type NativeMenuProps = BaseMenuProps & React.HTMLAttributes<HTMLElement>;
export type MenuProps = Partial<NativeMenuProps>;

// 要传递给子组件的props
interface IMenuContext {
    index:string;
    onSelect?:(selectedIndex: string) => void;
    mode?:'horizontal' | 'vertical';
    defaultOpenSubMenus?:string[];
}
export const MenuContext = createContext<IMenuContext>({index:'0'})

const Menu:React.FC<MenuProps> = (props)=>{
    const {defaultIndex,children,mode='horizontal',onSelect,}=props;
    const [currentIndex,setCurrentIndex] = useState(defaultIndex)

    const classes = classNames('cherry-menu',{
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })

    // 遍历生成menuItem组件
    const childrenRender = () => {
        return React.Children.map(children,(child,index)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            console.log(childElement);
            const {displayName} = childElement.type//解构幅值
            if(displayName == 'MenuItem'){
                return React.cloneElement(childElement,{
                    index: index.toString()
                })
            }else{
                console.log('Menu has a child which is not a MenuItem component');
                
                //  return <Alert title="警告提示" type="warning" closeable={true}>Menu has a child which is not a MenuItem component</Alert>
            }
        })
    }

    // 要传递的函数
    const handleClick = (index:string)=>{
        setCurrentIndex(index);
        if(onSelect){
            onSelect(index)
        }
    }
    // 要传递的value
    const passedContext : IMenuContext = {
        index: currentIndex ? currentIndex : '0',
        onSelect:handleClick,
        mode,
    }

    return (
        <ul className={classes}>
            <MenuContext.Provider value={passedContext}>
                {childrenRender()}  
            </MenuContext.Provider>
        </ul>
    )
}

export default Menu

function setState(defaultIndex: string | undefined): [any, any] {
    throw new Error('Function not implemented.');
}
