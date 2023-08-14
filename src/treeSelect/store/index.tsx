import { TreeOptions } from "../index"
import { Node, NodeOptions } from "./node";

export interface StoreOptions {
    treeOptions: TreeOptions;
    accordion?: boolean
}
export class Store {
    treeOptions:TreeOptions;
    data: Record<string,any>[];
    accordion: boolean;
    root: Node;
    
    constructor (data: Record<string,any>[], options: StoreOptions) {
        const {treeOptions,accordion = false} = options;
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
    createNode (options:Omit<NodeOptions,'store'>){
        return new Node({...options,store:this})
    }

    // dfs方法创建树
    createTree (data: Record<string,any>[]) {
        const dfs = (data: Record<string,any>[], depth = 1, parent: Node | null = null) =>{
            const {id,name,children}= this.treeOptions;
            const res = data.map((item)=>{
                const node:Node = this.createNode({
                    id: item[id],
                    name: item[name],
                    data: item,
                    depth,
                    parent,
                    children:[]
                })
                // children作为索引
                node.children = children && Array.isArray(item[children])?dfs(item[children],depth+1,node):[]
                return node
            })
            return res
        }
        this.root.children = dfs(data,this.root.depth+1,this.root)
        return this.root.children
    }
}

// 拍平数组
export const flatten = <T extends any[] = Record<string,any>[]>(arr:T,key='children'):Record<string,any>[]=>{
    return arr.reduce((total,current)=>{
        const isArray = Array.isArray(current[key])
        total.push(current)

        if(isArray){
            total.push(...flatten(current[key],key))
        }
        return total
    },[])
}