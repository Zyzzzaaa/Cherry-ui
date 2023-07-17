/**
 * title: 自定义页脚内容
 * description: 可以通过`footerType`来选择我们给出的两种基本模式的页脚，也可以自定义页脚内容。
 */
import React,{useState} from "react"
import { Button, Modal} from "cherry-ui"

export default ()=> {
    const [open,setOpen] = useState(false)
    const [open2,setOpen2] = useState(false)
    const [open3,setOpen3] = useState(false)

    return (
        <div>
            <Button onClick={()=>setOpen(true)}>default页脚</Button>
            <Modal open={open} onClose={()=>setOpen(false)} onOk={()=>setOpen(false)} title="modal组件标题">
                这是一条警告提示
            </Modal>

            <Button onClick={()=>setOpen2(true)}>simple页脚</Button>
            <Modal open={open2} onClose={()=>setOpen2(false)} onOk={()=>setOpen2(false)} title="modal组件标题" footerType='simple'>
                这是一条警告提示
            </Modal>

            <Button onClick={()=>setOpen3(true)}>自定义页脚</Button>
            <Modal open={open3} onClose={()=>setOpen3(true)} title="modal组件标题" footerItem={[<button onClick={()=>setOpen3(false)}>点我关闭</button>,<button>点我没用</button>]}>
                这是一条警告提示
            </Modal>
        </div>
    )
}