/**
 * title: 自定义位置
 * description: 自定义位置，点击触发按钮抽屉从响应的位置滑出，点击遮罩层关闭
 */
 import React, { useState } from 'react'
 import { Drawer, Button} from 'cherry-ui'
 
 export default () => {
     const [left,setLeft] = useState(false);
     const [right,setRight] = useState(false);
     const [top,setTop] = useState(false);
     const [bottom,setBottom] = useState(false);
 
     const leftDrawer = () => {
         setLeft(true)
     }
     const closeLeft = () => {
         setLeft(false)
     }
     const rightDrawer = () => {
        setRight(true)
    }
    const closeRight = () => {
        setRight(false)
    }
    const topDrawer = () => {
        setTop(true)
    }
    const closeTop = () => {
        setTop(false)
    }
    const bottomDrawer = () => {
        setBottom(true)
    }
    const closeBottom = () => {
        setBottom(false)
    }
     return (
         <div>
             <Button onClick={leftDrawer}>Open Left Drawer</Button>
             <Drawer title='Left Drawer' close={true} open={left} onClose={closeLeft} placement='left'>
                 <p>Some contents...</p>
                 <p>Some contents...</p>
                 <p>Some contents...</p>
             </Drawer>

             <Button onClick={rightDrawer} type='success'>Open Right Drawer</Button>
             <Drawer title='Right Drawer' close={true} open={right} onClose={closeRight}>
                 <p>Some contents...</p>
                 <p>Some contents...</p>
                 <p>Some contents...</p>
             </Drawer>

             <Button onClick={topDrawer} type='warning'>Open Top Drawer</Button>
             <Drawer title='Top Drawer' close={true} open={top} onClose={closeTop} placement='top'>
                 <p>Some contents...</p>
                 <p>Some contents...</p>
                 <p>Some contents...</p>
             </Drawer>

             <Button onClick={bottomDrawer} type='danger'>Open bottom Drawer</Button>
             <Drawer title='Bottom Drawer' close={true} open={bottom} onClose={closeBottom} placement='bottom'>
                 <p>Some contents...</p>
                 <p>Some contents...</p>
                 <p>Some contents...</p>
             </Drawer>
         </div>
     )
 }