import { TreeOptions } from "../index";
import { Node, NodeOptions } from "./node";
export interface StoreOptions {
    treeOptions: TreeOptions;
    accordion?: boolean;
}
export declare class Store {
    treeOptions: TreeOptions;
    data: Record<string, any>[];
    accordion: boolean;
    root: Node;
    constructor(data: Record<string, any>[], options: StoreOptions);
    private createRoot;
    createNode(options: Omit<NodeOptions, 'store'>): Node;
    createTree(data: Record<string, any>[]): Node[];
    getCheckedNodes(indeterminate?: boolean): Record<string, any>;
    setCheckedKeys(keys: number[] | string[]): void;
    setExpandKeys(keys: number[] | string[]): void;
    checkedAll(checked: boolean): void;
    expandAll(collapse: boolean): void;
}
