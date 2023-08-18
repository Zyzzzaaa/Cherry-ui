import React from "react";
import './style/index.less';
interface BoxProps {
    disabled?: boolean;
    checked?: boolean;
    indeterminate?: boolean;
    children?: React.ReactNode[] | string;
    onChange?: (e?: React.BaseSyntheticEvent) => void;
}
declare const CheckBox: React.FC<BoxProps>;
export default CheckBox;
