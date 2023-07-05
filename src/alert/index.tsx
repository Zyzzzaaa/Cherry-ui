import React from "react"
import classNames from 'classnames'

type BaseAlertProps={
    type?:'primary' | 'success' | 'warning' | 'danger';
    title?:'string'
}

type NativeAlertProps=BaseAlertProps&React.HTMLAttributes<HTMLElement>;
export type AlertProps = Partial<NativeAlertProps>

const  Alert:React.FC<AlertProps>=(props)=>{
    const {type,title,...restProps}=props
    
    const classes = classNames('cherry-alert',{
        [`alert-${type}`]:type
    })
    return (
        <div className={classes} {...restProps}>
            <div className="alert-title">{title}</div>
        </div>
    )
}

export default Alert