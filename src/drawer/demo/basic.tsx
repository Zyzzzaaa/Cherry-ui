/**
 * title: 基础抽屉
 * description: 点击触发按钮抽屉从右划出，点击遮罩区或x图标关闭。
 */
import React from 'react'
import { Drawer, Button} from 'cherry-ui'

export default () => {
    return (
        <div>
            <Button>Open the Drawer</Button>
            <Drawer title='Basic Drawer' close={true}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}