import React, { useState } from "react"
import { CSSTransition } from "react-transition-group";

export interface ModalProps {
    children:React.ReactNode,
    title?:string,
    mask?:boolean,
}

const Modal:React.FC<ModalProps> = (props) => {
    const {children,title,mask,...restProps} = props;
    const [masked,setMasked] = useState(false);



    return (
        <div>
            {/* 遮罩层 */}
            {mask && (
                <CSSTransition className='cherry-modal-mask' in={masked} timeout={300}>
                    <div className="modal-mask"></div>
                </CSSTransition>
            )}
            {/* 弹出内容 */}
        </div>
    )
}

export default Modal