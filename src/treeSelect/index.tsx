import React from "react";
import './style/index.less'

interface BaseTreeSelectProps {
    isSingle?: boolean; //是否为单选
    checkable?: boolean; //
    checkboxType?: 'circle' | 'box';
}
type NativeTreeSelectProps = BaseTreeSelectProps & React.HTMLAttributes<HTMLElement>;
export type TreeSelectProps = Partial<NativeTreeSelectProps>

const TreeSelect:React.FC<TreeSelectProps> = (props)=>{
    const {...restprops} = props;

    return (
        <div {...restprops}>

        </div>
    )
}

export default TreeSelect