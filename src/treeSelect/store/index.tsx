import { TreeOptions, flattern } from "../index"
import { Node, NodeOptions } from "./node";

export interface StoreOptions {
    treeOptions: TreeOptions;
    accordion?: boolean
}
export class Store {
    treeOptions: TreeOptions;
    data: Record<string, any>[];
    accordion: boolean;//只允许展开一个节点
    root: Node;

    constructor(data: Record<string, any>[], options: StoreOptions) {
        const { treeOptions, accordion = false } = options;
        this.data = data;
        this.accordion = accordion;
        this.treeOptions = treeOptions;
        this.root = this.createRoot([])
    }

    // 创建根节点的私有方法
    private createRoot(children: Node[] = []) {
        return new Node({
            id: 'root',
            name: 'root',
            children,
            depth: 0,
            parent: null,
            data: null,
            collapse: true,
            store: this
        })
    }

    // 创建普通树节点 Omit排除掉store
    createNode(options: Omit<NodeOptions, 'store'>) {
        return new Node({ ...options, store: this })
    }

    // dfs方法创建树
    createTree(data: Record<string, any>[]) {
        const dfs = (data: Record<string, any>[], depth = 1, parent: Node | null = null) => {
            const { id, name, children } = this.treeOptions;
            const res = data.map((item) => {
                const node: Node = this.createNode({
                    id: item[id],
                    name: item[name],
                    data: item,
                    depth,
                    parent,
                    children: []
                })
                // children作为索引
                // node.children = children && Array.isArray(item[children])?dfs(item[children],depth+1,node):[]
                node.children = children ? dfs(item[children], depth + 1, node) : []
                return node
            })
            return res
        }
        this.root.children = dfs(data, this.root.depth + 1, this.root)
        return this.root.children
    }

    // 获得选中项的数组集合->能否改成push
    getCheckedNodes(indeterminate = true) {
        const flatternTree = flattern(this.root.children as Node[])

        return flatternTree.reduce((total, current) => {
            if (indeterminate) {
                if (current.checked || current.indeterminate) {
                    total.concat(current)
                }
                return total
            } else {
                return total.concat(current)
            }
        }, [])
    }

    // 把node的checked属性激活为true
    setCheckedKeys(keys: number[] | string[]) {
        const map = new Map(
            // 返回一个数组as:[[1,1],[3,3]]
            keys.map(item => [item, item])
        )
        const flatternTree = flattern(this.root.children as Node[])

        flatternTree.forEach(node => {
            if (map.get(node.id)) {
                node.setChecked(true)
            }
        })
    }

    // 把node的expand属性激活为true
    setExpandKeys(keys: number[] | string[]) {
        const map = new Map(
            keys.map(item => [item, item])
        )
        const flatternTree = flattern(this.root.children as Node[])

        flatternTree.forEach(node => {
            if (map.get(node.id)) {
                node.setCollapse(true)
            }
        })
    }

    // 全选--把root的checked激活为true
    checkedAll(checked: boolean) {
        this.root.setChecked(checked)
    }

    // 全部展开/关闭
    expandAll(collapse: boolean) {
        const dfs = (arr: Node[]) => {
            arr.forEach(node => {
                node.collapse = collapse
                if (node.children) {
                    dfs(node.children)
                }
            })
        }

        dfs(this.root.children as Node[])
    }
}
