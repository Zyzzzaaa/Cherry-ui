import React, { FC } from 'react';
import classnames from "classnames";
import './index.less'

export type ButtonHTMLTypes = 'submit' | 'button' | 'reset';
export type ButtonType = 'link' | 'primary' | 'success' | 'warning' | 'danger';
type BaseButtonProps = {
  // type?:ButtonType;
  className?: string;
  size?: 'small' | 'large' | 'default'
}
type NativeButtonProps = {
  htmltype?: ButtonHTMLTypes;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;
export type ButtonProps = Partial<NativeButtonProps>;



const Button: FC<ButtonProps> = (ButtonProps) => {
  const { size, className,children } = ButtonProps;

  const classNames = classnames('cherry-btn', className, {
    'btn-small': size == 'small',
    'btn-large': size === 'large'
  })
  return <button
    className={classNames}
  >
    {children}
  </button>;
};

Button.defaultProps = {
  size: 'default',
  className: '',
  children:'',
}

export default Button;
