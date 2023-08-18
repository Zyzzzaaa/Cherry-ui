import React, { useState } from "react"
import classNames from 'classnames'
import './style/index.less'
import { IconClose } from "../icons";

type BaseAlertProps = {
    type?: 'primary' | 'success' | 'warning' | 'danger';
    title?: string;
    children?: any;
    closeable?: boolean;
    // 点击关闭按钮回调函数
    onClose?: React.MouseEventHandler<HTMLButtonElement>
}

type NativeAlertProps = BaseAlertProps & React.HTMLAttributes<HTMLElement>;
export type AlertProps = Partial<NativeAlertProps>

const Alert: React.FC<AlertProps> = (props) => {
    const { type, title, children, closeable, onClose, ...restProps } = props;

    const classes = classNames('cherry-alert', {
        [`alert-${type}`]: type
    })

    const [close, setClose] = useState<boolean>(false);

    function closeAlert():void {
        setClose(true);
    }


    return (
        <div>
            {!close && (
                <div className={classes} {...restProps}>
                    <div className="alert-title">{title}</div>
                    <div className="alert-in">
                        {children}
                        {(closeable && (<button type='button' className="alert-close" onClick={onClose || closeAlert}>
                            <IconClose></IconClose>
                        </button>))}
                    </div>
                </div>
            )}
        </div>
    )
}

Alert.defaultProps = {
    type: 'primary',
    title: '提示',
    children: '描述',
}

export default Alert