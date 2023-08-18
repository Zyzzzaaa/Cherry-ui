import React from "react";
import './style/index.less';
type BaseAlertProps = {
    type?: 'primary' | 'success' | 'warning' | 'danger';
    title?: string;
    children?: any;
    closeable?: boolean;
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
};
type NativeAlertProps = BaseAlertProps & React.HTMLAttributes<HTMLElement>;
export type AlertProps = Partial<NativeAlertProps>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
