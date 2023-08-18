import React, { ChangeEvent, ReactElement } from "react";
import './style/index.less';
interface BaseInputProps {
    disabled?: boolean;
    size?: 'large' | 'default' | 'small';
    prepend?: string | ReactElement;
    append?: string | ReactElement;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
type NativeInputProps = BaseInputProps & React.HTMLAttributes<HTMLElement>;
export type InputProps = Partial<NativeInputProps>;
declare const Input: React.FC<InputProps>;
export default Input;
