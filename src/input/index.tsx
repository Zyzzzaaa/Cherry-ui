import React from "react";
import './style/index.less'

interface BaseInputProps {
    menu:string;
}
type NativeInputProps = BaseInputProps & React.HTMLAttributes<HTMLElement>;
export type InputProps = Partial<NativeInputProps>;

const Input:React.FC<InputProps> = (props) => {
    const {...restprops}=props;
    
    return (
        <div {...restprops}></div>
    )
}

export default Input