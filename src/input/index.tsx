import React, { ChangeEvent, ReactElement } from "react";
import './style/index.less'
import classNames from 'classnames';

interface BaseInputProps {
    disabled?:boolean;
    size?:'large' | 'default' | 'small';
    prepend?:string | ReactElement;// 前缀
    append?:string | ReactElement;// 后缀
    onChange?: (e: ChangeEvent<HTMLInputElement>)=>void
}
type NativeInputProps = BaseInputProps & React.HTMLAttributes<HTMLElement>;
export type InputProps = Partial<NativeInputProps>;

const Input:React.FC<InputProps> = (props) => {
    const {disabled,size,style,prepend,append,...restprops}=props;
    const classes = classNames('cherry-input',{
        [`input-${size}`]:size,

    })
    const innerClasses = classNames('input-inner',{
        'is-disabled':disabled,
    })
    return (
        <div className={classes} style={style}>
            {prepend && <div className="input-group-prepend">{prepend}</div>}
            <input className={innerClasses} disabled={disabled} placeholder="请输入" {...restprops}/>
            {append && <div className="input-group-append">{append}</div>}
        </div>
    )
}

Input.defaultProps = {
    disabled: false,
    size: 'default'
}

export default Input