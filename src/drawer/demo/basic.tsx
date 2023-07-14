/**
 * title: 基础抽屉
 * description: 点击触发按钮抽屉从右划出，点击遮罩区或x图标关闭。可以通过设置`close`的值来选择是否需要x图标 
 */
import React, { useState } from 'react'
import { Drawer, Button} from 'cherry-ui'

export default () => {
    const [open,setOpen] = useState(false);
    const [open2,setOpen2] = useState(false);

    const showDrawer = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    const showDrawer2 = () => {
        setOpen2(true)
    }

    const onClose2 = () => {
        setOpen2(false)
    }
    return (
        <div>
            <Button onClick={showDrawer}>Open the Drawer</Button>
            <Drawer title='Basic Drawer' open={open} onClose={onClose}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <Button onClick={showDrawer2} type='success'>没有x图标的Drawer</Button>
            <Drawer title='Basic Drawer' close={false} open={open2} onClose={onClose2}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}