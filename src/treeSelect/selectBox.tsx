import React from "react";
import './style/index.less'

interface BoxProps{
    disabled?:boolean;
    checked?:boolean;
    children?:React.ReactNode[];
}

const SelectBox:React.FC<BoxProps>=(props)=>{
    const {disabled, children,checked,...restprops} = props;
    return (
        <label {...restprops} className="cherry-selectBox">
            <input type="checkbox" disabled={disabled} checked={checked}/>
            <span>{children}</span>
        </label>
    )
}

export default SelectBox