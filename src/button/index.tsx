import React, { FC } from 'react';
import classnames from 'classnames';
import './style/index.less';

export type ButtonType = 'link' | 'primary' | 'success' | 'warning' | 'danger';
type BaseButtonProps = {
  type?: ButtonType;
  className?: string;
  size?: 'small' | 'large' | 'default';
  round?: boolean;
  disabled?: boolean;
};
// 原生按钮属性
type NativeButtonProps = {
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>;
// 链接按钮属性
type AnchorButtonProps = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLElement>, 'type'>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = (ButtonProps) => {
  const { size, className, children, type, href, disabled, round, ...restProps } = ButtonProps;

  const classNames = classnames('cherry-btn', className, {
    'btn-small': size == 'small',
    'btn-large': size === 'large',
    'is-round': round,
    'is-disabled': disabled,
    [`cherry-components-${type}`]: type,
  });

  if (type === 'link' && href) {
    return (
      <a className={classNames} href={href} {...restProps}>
        {children}
      </a>
    );
  }

  return <button className={classNames}>{children}</button>;
};

Button.defaultProps = {
  size: 'default',
  className: '',
  children: '',
  type: 'primary',
  round: false,
  disabled: false,
};

export default Button;
