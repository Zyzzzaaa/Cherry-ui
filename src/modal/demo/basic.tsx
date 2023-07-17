/**
 * title: 基础对话框
 * description: 点击按钮弹出对话框。 
 */
import React,{useState} from "react"
import { Button, Modal} from "cherry-ui"

export default ()=> {
    const [open,setOpen] = useState(false)
    const [open2,setOpen2] = useState(false)
    return (
        <div>
            <Button onClick={()=>setOpen(true)}>Open Modal</Button>
            <Modal open={open} onClose={()=>setOpen(false)} onOk={()=>setOpen(false)} title="modal组件标题">
                这是一条警告提示
            </Modal>

            <Button onClick={()=>setOpen2(true)}>无遮罩层版</Button>
            <Modal open={open2} onClose={()=>setOpen2(false)} onOk={()=>setOpen2(false)} title="modal组件标题" mask={false}>
                这是一条警告提示
            </Modal>
        </div>
    )
}
