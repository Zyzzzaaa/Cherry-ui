/**
 * title: 居中对话框
 * description: 点击按钮从屏幕中心打开对话框。 
 */
import React,{useState} from "react"
import { Button, Modal} from "cherry-ui-react"

export default ()=> {
    const [open,setOpen] = useState(false)

    return (
        <div>
            <Button onClick={()=>setOpen(true)}>居中对话框</Button>
            <Modal open={open} onClose={()=>setOpen(false)} onOk={()=>setOpen(false)} title="modal组件标题" center={true}>
                这是一条警告提示
            </Modal>
        </div>
    )
}