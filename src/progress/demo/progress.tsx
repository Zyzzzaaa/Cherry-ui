/**
 * title: 动态演示
 * description: 会动的精度条。
 */
 import React, { useState } from "react"
 import { Progress } from "cherry-ui"
 import { Button } from 'cherry-ui';
import { Space } from 'cherry-ui';

 export default () => {
    const [count,setCount] = useState(20);

    return (
        <div>
            <Button onClick={()=>{setCount(count-10<=0?0:count-10)}}>-10%</Button>
            <Button onClick={()=>{setCount(count+10)}}>+10%</Button>
            <Space side="center">
            <Progress inner={true} max={100} percent={count}></Progress>
            <Progress inner={true} max={100} percent={count} circle={true}></Progress>
            </Space>
        </div>
     )
 }