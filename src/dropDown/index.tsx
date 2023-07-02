import React, { useState } from "react";
import Trigger from 'rc-trigger';
// import Trigger from '@rc-component/trigger';
import 'rc-trigger/assets/index.css';

// 下拉按钮传参类型
export interface DropDownProps {
    children: React.ReactElement,
    items: any,
    trigger?: 'click' | 'hover',
    popupPlacement?: 'bottom' | 'left' | 'right' | 'top' | 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
}

// 弹出列表传参类型
export interface MenuPops {
    items?: {
        content: string,
        className: 'menu-item' | 'menu-item-forbidden',
        childrens: any
    }[]
}

// 下拉菜单展示内容
const Menu: React.FC<MenuPops> = ({ items }) => {
    const [selected, setSelected] = useState<number>(-1);

    function updateSelected(index: number, className: any) {
        if (className !== 'menu-item-forbidden') {
            setSelected(index)
        }
    }

    return (
        <div className="cherry-dropdown">
            <div className="menu">
                {
                    items && items.map((item, index) => {
                        return <div
                            key={index}
                            className={item.className === 'menu-item-forbidden' ? item.className : index === selected ? 'menu-item-focus' : 'menu-item'}
                            onClick={() => updateSelected(index, item.className)}
                        >{item.content}</div>
                    })
                }
            </div>
        </div>
    )
}

const DropDown: React.FC<DropDownProps> = ({
    children,
    items,
    trigger = 'click',
    popupPlacement = 'bottom'
}) => {

    return (
        <Trigger
            popup={<Menu items={items}></Menu>}
            popupPlacement={popupPlacement}
            action={[trigger]}
            popupAlign={{
                points: ['tl', 'bl'],
                offset: [0, 3]
            }}
        >
            {children}
        </Trigger>
    )
}

export default DropDown;
