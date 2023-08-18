import React from 'react';
import './style/index.less';
export interface ProgressProps {
    percent: number;
    max: number;
    inner?: boolean;
    circle?: boolean;
    style?: React.CSSProperties;
    theme?: 'link' | 'primary' | 'success' | 'warning' | 'danger';
}
export declare const Progress: React.FC<ProgressProps>;
export default Progress;
