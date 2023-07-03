import './style/index.less'
import React from "react";
import classNames from "classnames";

export interface DividerDefaultProps {
    style?: 'primary' | 'success' | 'danger' | 'warning' | 'info' | 'link',
    text?: string
}

type NativeDividerProps = DividerDefaultProps & React.HTMLAttributes<HTMLElement>
export type DividerProps = Partial<NativeDividerProps>

const Divider: React.FC<DividerProps> = (props) => {
    const { style, text, ...restProps } = props;

    const className = classNames('cherry-divider', {
        [`cherry-components-${style}`]: style
    })

    return (
        <div className={className} {...restProps}>
            {(text !== null) && <span>{text}</span>}
        </div>
    )
}

Divider.defaultProps = {
    style: 'primary'
}

export default Divider