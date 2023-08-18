import React from 'react';
import './style/index.less';
interface BaseSpaceProps {
    size?: 'small' | 'medium' | 'large';
    direction?: 'row' | 'column';
    side?: 'left' | 'right' | 'center';
}
type NativeSpaceProps = BaseSpaceProps & React.HTMLAttributes<HTMLElement>;
export type SpaceProps = Partial<NativeSpaceProps>;
declare const Space: React.FC<SpaceProps>;
export default Space;
