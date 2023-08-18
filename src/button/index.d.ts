import React, { FC } from 'react';
import './style/index.less';
export type ButtonType = 'link' | 'primary' | 'success' | 'warning' | 'danger';
type BaseButtonProps = {
    type?: ButtonType;
    href?: string;
    className?: string;
    children?: React.ReactNode;
    size?: 'small' | 'large' | 'default';
    round?: boolean;
    disabled?: boolean;
};
type NativeButtonProps = {
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps;
type AnchorButtonProps = {
    href?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
declare const Button: FC<ButtonProps>;
export default Button;
