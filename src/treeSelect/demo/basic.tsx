/**
 * title: 基础对话框
 * description: 点击按钮弹出对话框。 
 */
import React, { useState } from "react"
import { CheckBox, TreeSelect } from "cherry-ui"

export default () => {
    const [checkAll, setCheckAll] = useState(false)

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
        <>
            <CheckBox
                checked={checkAll}
                onChange={e => {
                    setCheckAll(e.target.checked)
                }}>全选</CheckBox>
            <TreeSelect
                // checkedAll={checkAll}
                // defaultExpandAll={true}
                // defaultExpandKeys={['0-0', '0-0-0']}
                // defaultCheckedKeys={['0-0-0-0', '0-0-0-2', '0-0-1', '0-2']}
                options={{
                    id: 'key',
                    name: 'title',
                    children: 'children'
                }}
                data={treeData} />
        </>
    )
}