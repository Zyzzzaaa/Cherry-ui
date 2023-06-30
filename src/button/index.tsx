import React, { FC } from 'react';
import classnames from 'classnames';
import './style/index.less';

export type ButtonType = 'link' | 'primary' | 'success' | 'warning' | 'danger';
// export type ButtonHTMLTypes = 'submit' | 'button' | 'reset';

type BaseButtonProps = {
  type?: ButtonType;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  size?: 'small' | 'large' | 'default';
  round?: boolean;
  disabled?: boolean;
};
// 原生按钮属性
type NativeButtonProps = {
  // htmltype?: ButtonHTMLTypes;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps 

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
    'btn-small': size === 'small',
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

  return (
    <button 
    className={classNames}
    disabled={disabled} //禁用按钮
    type='button'
    {...restProps}
    >{children}</button>
  );
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
