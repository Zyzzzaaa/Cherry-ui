/**
 * title: 自定义页脚内容
 * description: 可以通过`footerType`来选择我们给出的两种基本模式的页脚，也可以自定义页脚内容。
 */
import React,{useState} from "react"
import { Button, Modal} from "cherry-ui"

export default ()=> {
    const [open,setOpen] = useState(false)

    const onOpen = () =>{
        setOpen(true)
    }
    const onClose = () =>{
        setOpen(false)
    }

    const [open2,setOpen2] = useState(false)

    const onOpen2 = () =>{
        setOpen2(true)
    }
    const onClose2 = () =>{
        setOpen2(false)
    }

    const [open3,setOpen3] = useState(false)

    const onOpen3 = () =>{
        setOpen3(true)
    }
    const onClose3 = () =>{
        setOpen3(false)
    }
    return (
        <div>
            <Button onClick={onOpen}>default页脚</Button>
            <Modal open={open} onClose={onClose} title="modal组件标题">
                这是一条警告提示
            </Modal>

            <Button onClick={onOpen2}>simple页脚</Button>
            <Modal open={open2} onClose={onClose2} title="modal组件标题" footerType='simple'>
                这是一条警告提示
            </Modal>

            <Button onClick={onOpen3}>自定义页脚</Button>
            <Modal open={open3} onClose={onClose3} title="modal组件标题" footerItem={[<button onClick={onClose3}>点我关闭</button>,<button>点我没用</button>]}>
                这是一条警告提示
            </Modal>
        </div>
    )
}