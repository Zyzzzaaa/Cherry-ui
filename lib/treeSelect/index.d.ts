import React from "react";
import './style/index.less';
export interface TreeOptions {
    id: string;
    name: string;
    children?: string;
}
interface BaseTreeSelectProps {
    data?: Record<string, unknown>[];
    options?: TreeOptions;
    checkbox?: boolean;
    height?: number;
    accordion?: boolean;
    defaultCheckedKeys?: number[] | string[];
    defaultExpand?: number[] | string[];
    defaultExpandAll?: boolean;
}
type NativeTreeSelectProps = BaseTreeSelectProps & React.HTMLAttributes<HTMLElement>;
export type TreeSelectProps = Partial<NativeTreeSelectProps>;
export declare const flattern: <T extends any[] = Record<string, any>[]>(arr: T, key?: string) => Record<string, any>[];
declare const TreeSelect: React.FC<TreeSelectProps>;
export default TreeSelect;
