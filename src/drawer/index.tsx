import React, { useState } from 'react'
import classNames from "classnames";
import './style/index.less'
import { IconClose } from '../icons';

interface DrawerDefaultProps {
    // 是否有关闭按钮
    close?: boolean;
    // 关闭按钮回调函数
    onClose: (event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    // 是否放置在当前dom中
    inline?: boolean;
    // 弹出框是否弹出
    open?: boolean;

    // root根节点
    rootClassname?: string;
    rootStyle?: React.CSSProperties;
    zIndex?: number;

    // wrapper中的内容
    title?: string;
    children?: React.ReactNode;
    placement?:'top' | 'bottom' | 'left' | 'right';

    // mask
    maskCloseable?: boolean;
}

type NativeDrawer = DrawerDefaultProps & React.HTMLAttributes<HTMLElement>
export type DrawerProps = Partial<NativeDrawer>

const Drawer: React.FC<DrawerProps> = props => {
    // props
    const {
        open,
        close,
        inline,
        onClose,
        //root 
        rootClassname = '',
        rootStyle = {},
        zIndex = 100,
        //warpper中的内容 
        title,
        children,
        placement = 'right',
        //mask
        maskCloseable = true,
        ...restProps } = props;


    // 控制遮罩层
    const [masked, setMasked] = useState(false);
    // 点击遮罩层触发隐藏事件
    const onHide = (): any => {
        onClose?.()
    }

    // 样式相关
    rootStyle.zIndex = zIndex;
    const classes = classNames('cherry-drawer', rootClassname, {
        "drawer-inline": inline
    })

    React.useEffect(() => {
        if(open){
            setMasked(!masked)
        }else{
            if(masked){setMasked(false)}//避免首次渲染
        }
    }, [open])

    return (
        <div className={classes} style={{ ...rootStyle }} {...restProps}>
            {/* 遮罩层 */}
            {masked ? <div className = 'drawer-mask' onClick={maskCloseable && open ? onHide : undefined}></div> : null}

            {/* drawer弹出框 */}
            <div className = {classNames('cherry-drawer-wrapper',`drawer-${placement}`)}>
                {open ?
                    <div className={classNames('drawer-content',`drawer-content-${placement}`)}>
                        <header className='drawer-header'>
                            {close ? <div className='drawer-close' onClick={open?onHide : undefined}><IconClose></IconClose></div> : null}
                            <div className='drawer-title'>{title}</div>
                        </header>
                        <main className='drawer-body'>{children}</main>
                    </div> : null}
            </div>
        </div>
    )
}

Drawer.defaultProps ={
        close:true,
        inline:false,
        //root 
        rootClassname : '',
        rootStyle : {},
        zIndex : 100,
        //warpper中的内容 
        title:'title',
        placement : 'right',
        //mask
        maskCloseable : true,
}

export default Drawer
