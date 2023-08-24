/**
 * title: 渲染到当前DOM中
 * description: 点击触发按钮抽屉滑出，渲染在当前DOM元素中。
 */
import React, { useState } from 'react'
import { Drawer, Button } from 'cherry-ui'

export default () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }

    const containerStyle:React.CSSProperties = {
        position:'relative',
        height: 200,
        padding:40,
        overflow:'hidden',
        backgroundColor:'gray',
        textAlign:'center'
    }
    return (
        <div style={containerStyle}>
            Render in this DOM.
            <Button onClick={showDrawer}>Open</Button>
            <Drawer title='Basic Drawer' close={true} open={open} onClose={onClose} inline={true}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}