import React, { useState } from 'react'
import classNames from "classnames";
import './style/index.less'
import { IconClose } from 'cherry-ui/icons';

interface DrawerDefaultProps {
    // 是否有关闭按钮
    close?: boolean;
    // 关闭按钮回调函数
    onClolse: (event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    // 是否放置在当前dom中
    inline?: boolean;
    // 弹出框是否弹出
    open?: boolean;

    // root根节点
    rootClassname?: string;
    rootStyle?: React.CSSProperties;
    zIndex?: number;

    title?: string;

    children?: React.ReactNode
}

type NativeDrawer = DrawerDefaultProps & React.HTMLAttributes<HTMLElement>
export type DrawerProps = Partial<NativeDrawer>

const Drawer: React.FC<DrawerProps> = props => {

    // 控制遮罩层
    const [masked, setMasked] = useState(true)

    const { open = true, close, inline, rootClassname = '', rootStyle = {}, zIndex=100, title, children, ...restProps } = props;
    rootStyle.zIndex = zIndex;
    const classes = classNames('cherry-drawer', rootClassname, {
        "drawer-inline": inline,

    })

    React.useEffect(() => {
        if (open) {
            if (masked) {
                setMasked(true)
            }
        } else {
            setMasked(false)
        }
    }, [open])

    return (
        <div className={classes} style={{ ...rootStyle }} {...restProps}>

            {/* 遮罩层 */}
            {/* {masked?<div className='drawer-mask'></div>:null} */}
            <div className='drawer-mask'></div>

            {/* drawer弹出框 */}
            <div className="cherry-drawer-wrapper">
                {open ?
                    <div className='drawer-content'>
                        <header className='drawer-header'>
                            {close ? <IconClose></IconClose> : null}
                            <div className='drawer-title'>{title}</div>
                        </header>
                        <main className='drawer-body'>{children}</main>
                    </div> : null}
            </div>
        </div>
    )
}

export default Drawer
