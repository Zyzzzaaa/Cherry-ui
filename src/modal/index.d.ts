import React from "react";
import './style/index.less';
interface BaseModalProps {
    children: React.ReactNode;
    open?: boolean;
    title?: string;
    mask?: boolean;
    close?: boolean;
    center?: boolean;
    footerType?: 'default' | 'simple';
    footerItem?: React.ReactNode[];
    onClose?: (event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    onOk?: (event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
}
type NativeModalProps = BaseModalProps & React.HTMLAttributes<HTMLElement>;
export type ModalProps = Partial<NativeModalProps>;
declare const Modal: React.FC<ModalProps>;
export default Modal;
