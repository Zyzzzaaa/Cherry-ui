import React, { ChangeEvent, useEffect, useState } from "react";
import './style/index.less'
import classNames from 'classnames';

interface BoxProps{
    disabled?:boolean;
    checked?:boolean;
    indeterminate?:boolean;
    children?:React.ReactNode[];
    onChange?: (e?: React.BaseSyntheticEvent) => void
}

const SelectBox:React.FC<BoxProps>=(props)=>{
    const {disabled, checked, indeterminate, onChange, children, ...restprops} = props;
    const [inputChecked,setChecked] = useState(checked);
    const [half,setHalf] = useState(indeterminate)
    const classes = classNames('cherry-checkbox',{
        "checked":inputChecked,
        "half-checked":half
    })

    const changeHandle = (e:ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
        onChange?.(e)
    }

    useEffect(()=>{
        setChecked(checked)
        setHalf(indeterminate)
    },[inputChecked,half])

    return (
        <label {...restprops} className="cherry-selectBox">
            <input type="checkbox" disabled={disabled} checked={checked} className={classes} onChange={changeHandle}/>
            <span>{children}</span>
        </label>
    )
}

export default SelectBox