/**
 * title: 二级菜单
 * description: 点击选择菜单项并支持展示响应的子菜单内容，支持改变默认选中项。
 */
 import React, { useState } from "react"
 import {Menu, MenuItem, SubMenu} from "cherry-ui"
 
 export default ()=>{
    const [selected,setSelected] = useState('1');
    
    const handleSelect = (index) => {
        setSelected(index)
    }
    return (
        <div>
            <Menu onSelect={handleSelect} defaultIndex='1'>
                <MenuItem key="1">Home</MenuItem>
                <SubMenu title='About' key='2'>
                    <MenuItem>子列表1</MenuItem>
                    <MenuItem>子列表2</MenuItem>
                </SubMenu>
                <MenuItem key="3">Contact</MenuItem>
            </Menu>
            <p>You have select item {selected}</p>
        </div>
    )
}