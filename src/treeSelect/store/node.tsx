import type { Store } from "./index"

export interface NodeOptions {
    id: string | number
    name: string
    data: Record<string, unknown> | null
    depth?: number
    checked?: boolean
    indeterminate?: boolean
    collapse?: boolean
    loading?: boolean
    disabled?: boolean
    parent: Node | null
    children: Node[] | null
    store: Store
}

export class Node {
    id: string | number
    name: string
    data: Record<string, unknown> | null
    depth: number
    checked: boolean
    indeterminate: boolean
    collapse: boolean
    parent: Node | null
    store: Store
    children: Node[] | null

    constructor(options: NodeOptions) {
        const {
            id,
            name,
            data,
            parent,
            children,
            store,
            depth = 1,
            checked = false,
            indeterminate = false,
            collapse = false,
        } = options

        this.id = id
        this.name = name
        this.data = data
        this.depth = depth
        this.parent = parent
        this.checked = checked
        this.indeterminate = indeterminate
        this.children = children
        this.collapse = collapse
        this.store = store
    }

    // 是否被全选中（分有、无子节点讨论）
    hasChecked(node: Node) {
        if (node?.children?.length === 0 && node.checked !== false) return true
        return node.children?.length !== 0 && node.children?.every((item: Node) => item.checked)
    }

    // 是否被半选中
    hasIndeterminate(node: Node) {
        return !node.hasChecked(node) && node.children?.some((item: Node) => item.checked || item.indeterminate)
    }

    // 被选中
    setChecked(checked: boolean) {
        if (checked === false) {
            this.indeterminate = false
        }
        this.checked = checked
        // 自上向下
        const currentToBottom = (node: Node, checked: boolean) => {
            node.children?.forEach(item => {
                if (Array.isArray(item.children)) {
                    currentToBottom(item, checked)
                }
                if (checked === false) {
                    item.indeterminate = false
                }
                item.checked = checked

            })
        }
        // 自下向上
        const currentToTop = (node: Node | null, checked: boolean) => {
            if (node === null) return

            node.checked = this.hasChecked(node) as boolean
            node.indeterminate = this.hasIndeterminate(node) as boolean

            currentToTop(node.parent, checked)
        }

        currentToBottom(this, checked)
        // 不是最顶部的节点都要更新父节点状态
        if (this.depth !== 1) {
            currentToTop(this, checked)
        }
    }

    // 展开或者关闭展示子节点
    setCollapse(collapse: boolean) {
        if (this.store.accordion) {
            if (collapse === false) {
                this.collapse = false
            } else {
                const children = this.parent?.children
                children?.forEach(node => {
                    node.collapse = false
                })
                this.collapse = true
            }
        } else {
            this.collapse = collapse
        }
    }

    // 创建子节点
    setChildren(data: Record<string, unknown>[], append = false) {
        const { id = 'id', name = 'name', children = 'children' } = this.store.treeOptions

        const dfs = (data: Record<string, unknown>[], depth: number, parent: Node) => {
            if (!data) return []
            const res = data.map((item) => {
                const node: Node = this.store.createNode({
                    id: item[id] as number | string,
                    name: item[name] as string,
                    data: item,
                    children: [],
                    parent,
                    depth
                })

                node.children = Array.isArray(item[children])
                    ? dfs(item[children] as Record<string, unknown>[], depth + 1, node)
                    : []

                return node
            })
            // depth = this.depth
            return res
        }

        const result = dfs(data, this.depth + 1, this)

        if (append) {
            this.children = this.children ? this.children.concat(result) : result
        } else {
            this.children = result
        }
    }

    // 追加节点
    append(node: Node) {
        if (node.depth === 0) return
        const parentNode = node.parent as Node
        parentNode.children?.push(node)
    }

    // 删除节点
    remove(node: Node) {
        if (node.depth === 0) return
        const parentNode = node.parent as Node
        const findIndex = parentNode?.children?.findIndex(item => item.id === node.id)

        if (findIndex && findIndex !== -1) parentNode.children?.splice(findIndex, 1)
    }
}
