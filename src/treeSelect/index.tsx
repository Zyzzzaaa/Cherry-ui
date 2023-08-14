import React from "react";
import { FixedSizeList } from "react-window";
import './style/index.less'

export interface TreeOptions {
    id:string;
    name:string;
    children?:string
}

interface BaseTreeSelectProps {
    data?:Record<string,unknown>[];
    options?:TreeOptions;
    checkbox?:boolean;
}
type NativeTreeSelectProps = BaseTreeSelectProps & React.HTMLAttributes<HTMLElement>;
export type TreeSelectProps = Partial<NativeTreeSelectProps>

const TreeSelect:React.FC<TreeSelectProps> = (props)=>{
    const {...restprops} = props;

    return (
        <div {...restprops} className="cherry-container">
            <FixedSizeList itemCount={1} itemSize={50}>{<div index='1'>111</div>}</FixedSizeList>
        </div>
    )
}

export default TreeSelect