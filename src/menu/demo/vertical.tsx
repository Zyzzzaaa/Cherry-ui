/**
 * title: 垂直菜单
 * description: 点击选择垂直菜单项并展示相应内容，支持改变默认选中项。
 */
 import React, { useState } from "react"
 import {Menu, MenuItem} from "cherry-ui"
 
 export default ()=>{
     const [selected,setSelected] = useState('1');
     
     const handleSelect = (index) => {
         setSelected(index)
     }
     return (
         <div>
             <Menu onSelect={handleSelect} defaultIndex='1' mode="vertical">
                 <MenuItem key="1">Home</MenuItem>
                 <MenuItem key="2">About</MenuItem>
                 <MenuItem key="3">Contact</MenuItem>
             </Menu>
             <p>You have select item {selected}</p>
         </div>
     )
 }