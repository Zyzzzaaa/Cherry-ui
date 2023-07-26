import React from "react";

interface BaseTreeSelectProps {
    isSingle?: boolean;
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