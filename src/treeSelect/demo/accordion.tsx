/**
 * title: 手风琴树形组件
 * description: 只允许展开一个树节点。 
 */
 import React from "react"
 import { TreeSelect } from "cherry-ui-react"
 
 export default () => {
 
     const treeData = [
         {
             title: '0-0',
             key: '0-0',
             children: [
                 {
                     title: '0-0-0',
                     key: '0-0-0',
                     children: [
                         { title: '0-0-0-0', key: '0-0-0-0' },
                         { title: '0-0-0-1', key: '0-0-0-1' },
                         { title: '0-0-0-2', key: '0-0-0-2' },
                     ],
                 },
                 {
                     title: '0-0-1',
                     key: '0-0-1',
                     children: [
                         { title: '0-0-1-0', key: '0-0-1-0' },
                         { title: '0-0-1-1', key: '0-0-1-1' },
                         { title: '0-0-1-2', key: '0-0-1-2' },
                     ],
                 },
                 {
                     title: '0-0-2',
                     key: '0-0-2',
                 },
             ],
         },
         {
             title: '0-1',
             key: '0-1',
             children: [
                 { title: '0-1-0-0', key: '0-1-0-0' },
                 { title: '0-1-0-1', key: '0-1-0-1' },
                 { title: '0-1-0-2', key: '0-1-0-2' },
             ],
         },
         {
             title: '0-2',
             key: '0-2',
         },
     ];
 
     return (
         <TreeSelect
             accordion={true}
             options={{
                 id: 'key',
                 name: 'title',
                 children: 'children',
             }}
             data={treeData}
         />
     )
 }