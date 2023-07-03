import React, { useState } from "react";
import Trigger from 'rc-trigger';
import 'rc-trigger/assets/index.css';
import './style/index.less'

// 下拉菜单传参类型
export interface DropDownProps {
    children: React.ReactElement,
    items: any,
    trigger?: 'click' | 'hover',
    popupPlacement?: 'bottom' | 'left' | 'right' | 'top' | 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
}

// 弹出列表传参类型
export interface MenuPops {
    items: {
        content: string,
        className: 'menu-item' | 'menu-item-forbidden',
        childrens: [],
    }[]
}

// 弹出列表位置
const builtinPlacements = {
    left: {
        points: ['cr', 'cl'],
    },
    right: {
        points: ['cl', 'cr'],
    },
    top: {
        points: ['bc', 'tc'],
    },
    bottom: {
        points: ['tc', 'bc'],
    },
    topLeft: {
        points: ['bl', 'tl'],
    },
    topRight: {
        points: ['br', 'tr'],
    },
    bottomRight: {
        points: ['tr', 'br'],
    },
    bottomLeft: {
        points: ['tl', 'bl'],
    },
};

// 下拉菜单展示内容
const Menu: React.FC<MenuPops> = ({ items }) => {
    const [selected, setSelected] = useState<number>(-1);

    // 更新focus的menu-item
    function updateSelected(index: number, className: any) {
        if (className !== 'menu-item-forbidden') {
            // console.log(index);
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
    trigger = 'hover',
    popupPlacement = 'bottom'
}) => {

    return (
        <Trigger
            popup={<Menu items={items}></Menu>}
            popupPlacement={popupPlacement}
            action={[trigger]}
            builtinPlacements={builtinPlacements}
            popupAlign={{
                overflow:{
                    adjustX:1,
                    adjustY:1
                }
            }}
        >
            {children}
        </Trigger>
    )
}

export default DropDown;
