import React, { useEffect, useRef, useState } from "react";
import { FixedSizeList } from "react-window";
import { Store } from "./store";
import { Node } from "./store/node";
import './style/index.less'
import { CheckBox } from 'cherry-ui';
import { NodeShow } from "./store/NodeShow";
import { RightOutlined } from 'cherry-ui/icons';



export interface TreeOptions {
    id:string;
    name:string;
    children?:string
}

interface BaseTreeSelectProps {
    data?:Record<string,unknown>[];
    options?:TreeOptions;
    checkbox?:boolean;
    accordion?:boolean;
}
type NativeTreeSelectProps = BaseTreeSelectProps & React.HTMLAttributes<HTMLElement>;
export type TreeSelectProps = Partial<NativeTreeSelectProps>

// 拍平数组
export const flattern = <T extends any[] = Record<string,any>[]>(arr:T,key='children'):Record<string,any>[]=>{
    return arr.reduce((total,current)=>{
        const isArray = Array.isArray(current[key])
        total.push(current)

        if(isArray){
            total.push(...flattern(current[key],key))
        }
        return total
    },[])
}

const TreeSelect:React.FC<TreeSelectProps> = (props)=>{
    const {options = {id:'id',name:'name',children:'children'},data = [],accordion = false} = props;

    const store = new Store(data,{
        treeOptions:options,
        accordion
    })
    const treeRef = useRef(null)
    // 创建树
    const [tree, setTree] = useState(store.createTree(data));
    // 创建拍平树的列表
    const [flatternTree, setFlatternTree] = useState<Node[]>(flattern(tree) as Node[])

    useEffect(()=>{
        setTree(store.createTree(data))
    },[data])
    useEffect(()=>{
        setFlatternTree(flattern(tree) as Node[])
    },[tree])

    // 判断是否展示node
    const showNode = (node: Node | null): boolean =>{
        if(!node) return false;
        if(!node.parent?.collapse) return false;
        if(node.depth===1) return true;
        return showNode(node.parent)
    }

    const treeNode = ({data, index, style}: {data: Node[], index: number, style: React.CSSProperties}) => {
        const node = data[index];
        const changeHandle = (e:any) =>{
            node.setChecked(e?.target.checked)
            setTree([...tree])
        }
        
        return (
            <li key={node.id} className="tree-node" style={{display: showNode(node) ? 'block' : 'none', ...style}}>
                <div>
                    <NodeShow show={!!node.children}>
                        <RightOutlined/>
                    </NodeShow>
                    <CheckBox checked={node.checked} indeterminate={node.indeterminate} onChange={changeHandle}>
                        {node.name}
                    </CheckBox>
                </div>
            </li>
        )
    }
    const displayNode = flatternTree.filter(node=>showNode(node))

    return (
        <div className="cherry-tree" ref={treeRef}>
            <FixedSizeList itemCount={displayNode.length} itemData={displayNode} itemSize={50} innerElementType='ul' width="100%" height={200}>
                {treeNode}
            </FixedSizeList>
        </div>
    )
}

export default TreeSelect