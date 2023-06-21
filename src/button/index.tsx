import React, { FC } from 'react';

export type ButtonType = 'link' | 'primary' | 'success' | 'warning' | 'danger';
export type ButtonProps = Partial<ButtonType>;

const Button: FC<ButtonProps> = (ButtonProps) => {
  // const {children,type}=ButtonProps;
  return <button></button>;
};

export default Button;
