import React from 'react'
import classNames from "classnames";

interface DrawerDefaultProps{
    // 是否有关闭按钮
    close?:boolean;
    // 关闭按钮回调函数
    onClolse:(event?:React.MouseEvent<HTMLElement>|React.KeyboardEvent<HTMLElement>)=>void;
    // 是否放置在当前dom中
    inline?:boolean;

    // root根节点
    rootClassname?:string;
    rootStyle?:React.CSSProperties;
    zIndex?:number;
}

type NativeDrawer = DrawerDefaultProps & React.HTMLAttributes<HTMLElement>
export type DrawerProps = Partial<NativeDrawer>

const Drawer:React.FC<DrawerProps> = props => {
    const {inline,rootClassname='',rootStyle={},zIndex,...restProps} = props;
    rootStyle.zIndex = zIndex;
    const classes = classNames('cherry-ui',rootClassname,{
        "drawer-inline":inline,
        
    })
  return (
    <div className={classes} style={rootStyle} {...restProps}>
        <div className="cherry-drawer-wrapper"></div>
    </div>
  )
}

export default Drawer
