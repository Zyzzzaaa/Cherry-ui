import { Store } from "./index";
export interface NodeOptions {
    id: string | number;
    name: string;
    data: Record<string, unknown> | null;
    depth?: number;
    checked?: boolean;
    indeterminate?: boolean;
    collapse?: boolean;
    loading?: boolean;
    disabled?: boolean;
    parent: Node | null;
    children: Node[] | null;
    store: Store;
}
export declare class Node {
    id: string | number;
    name: string;
    data: Record<string, unknown> | null;
    depth: number;
    checked: boolean;
    indeterminate: boolean;
    collapse: boolean;
    parent: Node | null;
    store: Store;
    children: Node[] | null;
    constructor(options: NodeOptions);
    hasChecked(node: Node): boolean | undefined;
    hasIndeterminate(node: Node): boolean | undefined;
    setChecked(checked: boolean): void;
    setCollapse(collapse: boolean): void;
    setChildren(data: Record<string, unknown>[], append?: boolean): void;
    append(node: Node): void;
    remove(node: Node): void;
}
