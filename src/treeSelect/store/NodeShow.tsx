import React, { useEffect, useState } from "react";

interface NodeShowProps {
    show?: boolean;
    flex?: boolean;
    className?: string;
    children?: React.ReactNode
}

export function NodeShow(props: NodeShowProps) {
    const {show, flex, className, children} = props;
    const [visible, setVisible] = useState(show);
    useEffect(()=>{
        setVisible(show)
    },[show])

    return (
        <section className={className} style={{display: visible?flex?'flex':'block':'none'}}>{children}</section>
    )
}