/**
 * title: 间距
 * description: 可以通过改变`size`的值来控制子元素之间的间距。
 */
 import React from "react"
 import { Space, Button, Divider } from "cherry-ui"
 
 export default () => {
     return (
         <div>
             <Space>
                 <Button type="primary">primary</Button>
                 <Button type='success'>success</Button>
                 <Button type='danger'>danger</Button>
             </Space>
             <Divider></Divider>
             <Space size="medium">
                 <Button type="primary">primary</Button>
                 <Button type='success'>success</Button>
                 <Button type='danger'>danger</Button>
             </Space>
             <Divider></Divider>
             <Space size="large">
                 <Button type="primary">primary</Button>
                 <Button type='success'>success</Button>
                 <Button type='danger'>danger</Button>
             </Space>
         </div>
     )
 }