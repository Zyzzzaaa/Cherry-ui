import './style/index.less';
import React from "react";
export interface DividerDefaultProps {
    style?: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'link';
    text?: string;
}
type NativeDividerProps = DividerDefaultProps & React.HTMLAttributes<HTMLElement>;
export type DividerProps = Partial<NativeDividerProps>;
declare const Divider: React.FC<DividerProps>;
export default Divider;
