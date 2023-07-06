import React from "react"
import classNames from 'classnames'
import './style/index.less'

type BaseAlertProps={
    type?:'primary' | 'success' | 'warning' | 'danger';
    title?:string;
    children?:any
}

type NativeAlertProps=BaseAlertProps&React.HTMLAttributes<HTMLElement>;
export type AlertProps = Partial<NativeAlertProps>

const  Alert:React.FC<AlertProps>=(props)=>{
    const {type,title,children,...restProps}=props
    
    const classes = classNames('cherry-alert',{
        [`alert-${type}`]:type
    })
    return (
        <div className={classes} {...restProps}>
            <div className="alert-title">{title}</div>
            <div className="alert-in">
                {children}
            </div>
        </div>
    )
}

export default Alert