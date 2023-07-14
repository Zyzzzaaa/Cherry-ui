/**
 * title: 基础抽屉
 * description: 点击触发按钮抽屉从右划出，点击遮罩区或x图标关闭。
 */
import React, { useState } from 'react'
import { Drawer, Button} from 'cherry-ui'

export default () => {
    const [open,setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <Button onClick={showDrawer}>Open the Drawer</Button>
            <Drawer title='Basic Drawer' close={true} open={open} onClose={onClose}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}