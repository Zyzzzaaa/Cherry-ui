import React from 'react';
import './style/index.less'

// object类型
export interface ObjectsType {
    link: string;
    text: string
}

interface BaseBreadcrumbProps {
    objects: ObjectsType[];
    target?: '_blank' | '_self'
}
type NativeBreadcrumb = BaseBreadcrumbProps & React.HTMLAttributes<HTMLElement>;
export type BreadcrumbProps = Partial<NativeBreadcrumb>

const Breadcrumb:React.FC<BreadcrumbProps> = (props)=>{
    const {objects, target='_self', ...restProps} = props;

    return (
        <div className='cherry-breadcrumb' {...restProps}>
            <ul className='breadcrumb-ul'>
                {objects?.map((obj,index)=>{
                    return (
                        <>
                            <li key={index} className='breadcrumb-li'>
                                <a href={obj.link}>{obj.text}</a>
                            </li>
                            {index !== objects.length-1 && <li className='breadcrumb-li'>/</li>}
                        </>
                    )
                })}
            </ul>
        </div>
    )
}

export default Breadcrumb