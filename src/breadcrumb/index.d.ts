import React from 'react';
import './style/index.less';
export interface ObjectsType {
    link: string;
    text: string;
}
interface BaseBreadcrumbProps {
    objects: ObjectsType[];
    target?: '_blank' | '_self';
}
type NativeBreadcrumb = BaseBreadcrumbProps & React.HTMLAttributes<HTMLElement>;
export type BreadcrumbProps = Partial<NativeBreadcrumb>;
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
