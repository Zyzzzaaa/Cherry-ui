import { Button } from "cherry-ui";
import { IconClose } from "cherry-ui/icons";
import React, { ReactNode, useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import './style/index.less'

interface BaseModalProps {
    children:React.ReactNode,
    open?:boolean;
    title?:string;
    mask?:boolean;
    close?:boolean;
    center?:boolean;
    footerType?:'default' | 'simple';
    footerItem?:React.ReactNode[];// 自定义footer
    onClose?:(event?:React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    onOk?:(event?:React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;

}
type NativeModalProps = BaseModalProps & React.HTMLAttributes<HTMLElement>
export type ModalProps = Partial<NativeModalProps>

const Modal:React.FC<ModalProps> = (props) => {
    const {children,open,title,mask,close,center,footerType,footerItem,onClose,onOk,...restProps} = props;
    // const [masked,setMasked] = useState(false);

    const onCancel = () => {
        if(typeof onClose == 'function'){
            onClose();
        }
    }

    const onYes = ()=>{
        if(typeof onOk == 'function'){
            onOk()
        }
    }

    useEffect(()=>{
        //禁止滚动
        document.body.style.overflow = open ? 'hidden' : ''
    },[open])

    // footer按钮类型
    const buttonArea: {default:ReactNode;simple:ReactNode} = {
        default:(
            <>
                <span className="footer-item" onClick={onCancel}>
                    <Button >取消</Button>
                </span>
                <span className="footer-item" onClick={onYes}>
                    <Button >确定</Button>
                </span>
            </>
        ),
        simple:(
            <>
                <span className="footer-item" onClick={onYes}>
                    <Button >知道了</Button>
                </span>
            </>
        )
    }

    return (
        open?<div className="cherry-modal" {...restProps}>
            {/* 遮罩层 */}
            { mask && (
                <CSSTransition classNames='cherry-modal-mask' in={open} timeout={300}>
                    <div className="modal-mask"></div>
                </CSSTransition>
            )}
            {/* 弹出内容 */}
            <CSSTransition classNames='cherry-modal-content' in={open} timeout={300}>
                <div className={classNames('modal-content',center?'':'modal-content-default')}>
                    <header className="modal-header">
                        <div className="modal-title">{title}</div>
                        {close && <div className="modal-close" onClick={onCancel}><IconClose></IconClose></div>}
                    </header>

                    <div className="modal-body">{children}</div>

                    <footer className="modal-footer">
                        {
                            footerItem?footerItem.map((item,index)=>{
                                return (
                                    <span className="footer-item" key={index}>
                                        {item}
                                    </span>
                                )
                            }):footerType&&buttonArea[footerType]
                        }
                    </footer>
                </div>
            </CSSTransition>
        </div>:null
    )
}

Modal.defaultProps={
    open:false,
    title:'',
    mask:true,
    close:true,
    center:false,
    footerType:"default",

}

export default Modal