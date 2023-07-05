import React from 'react'
import classNames from "classnames";
import './style/index.less'

interface BaseSpaceProps {
    size?:'small'|'medium'|'large',
    direction?:'row'|'column',
    side?:'left'|'right'|'center'
}

type NativeSpaceProps = BaseSpaceProps&React.HTMLAttributes<HTMLElement>
export type SpaceProps = Partial<NativeSpaceProps>

const Space:React.FC<SpaceProps>=(props)=>{
    const {size,direction,side,children,...restProps}=props;

    const classes = classNames('cherry-space',{
        [`space-${direction}`]:direction,
        [`space-${side}`]:side
    })

    const itemClasses = classNames('space-item',{
        [`space-${size}`]:size
    })

    // const firstItemClasses = classNames('space-item-first',{

    // })

    return(
        <div className={classes} {...restProps}>
            {React.Children.map(children,(child)=>(
                 <div className={itemClasses}>{child}</div>
            ))}
            
        </div>
    )
}
Space.defaultProps = {
    size:'small',
    direction:'row',
    side:'left',
}
export default Space