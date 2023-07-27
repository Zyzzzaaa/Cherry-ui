import React from "react";
import './style/index.less'
import classNames from 'classnames';

interface BaseInputProps {
    disabled?:boolean;
    size?:'large' | 'default' | 'small';
}
type NativeInputProps = BaseInputProps & React.HTMLAttributes<HTMLElement>;
export type InputProps = Partial<NativeInputProps>;

const Input:React.FC<InputProps> = (props) => {
    const {disabled,size,style,...restprops}=props;
    const classes = classNames('cherry-input',{
        [`input-${size}`]:size,

    })
    const innerClasses = classNames('input-inner',{
        'is-disabled':disabled,
    })
    return (
        <div className={classes} style={style} {...restprops}>
            <input className={innerClasses} disabled={disabled} placeholder="请输入"/>
        </div>
    )
}

Input.defaultProps = {
    disabled: false,
    size: 'default'
}

export default Input