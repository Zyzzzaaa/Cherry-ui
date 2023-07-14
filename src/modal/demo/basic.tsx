import React from "react"
import { Button, Modal} from "cherry-ui"

export default ()=> {


    return (
        <div>
            <Button>Open Modal</Button>
            <Modal>
                这是一条警告提示
            </Modal>
        </div>
    )
}