/**
 * title: 菜单禁选项
 * description: 禁用菜单项，不可点击选择。
 */
 import React, { useState } from "react"
 import {Menu, MenuItem} from "cherry-ui-react"
 
 export default ()=>{
     const [selected,setSelected] = useState('1');
     
     const handleSelect = (index) => {
         setSelected(index)
     }
     return (
         <div>
             <Menu onSelect={handleSelect} defaultIndex='1'>
                 <MenuItem key="1" disabled={true}>Home</MenuItem>
                 <MenuItem key="2">About</MenuItem>
                 <MenuItem key="3">Contact</MenuItem>
             </Menu>
             <p>You have select item {selected}</p>
         </div>
     )
 }