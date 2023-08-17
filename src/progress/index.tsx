import React, { useEffect, useMemo, useRef } from 'react';
import classNames from 'classnames';
import './style/index.less'

export interface ProgressProps {
    percent: number;
    max: number;
    circle?:boolean;
    style?: React.CSSProperties;
    theme?: 'link' | 'primary' | 'success' | 'warning' | 'danger';
}

export const Progress:React.FC<ProgressProps>=(props)=>{
    const {percent, max, circle, style, theme='primary'} = props
    
    const canvas = useRef<HTMLCanvasElement>(null);
    const value = useMemo(()=>{
        const res = percent >= max ? max :percent;
        return res + '%'
    },[percent,max]);

    useEffect(()=>{
        const ctx = canvas.current?.getContext('2d')
        const ratio = window.devicePixelRatio || 1
        const w = 150
        const h = 150
    
        if (canvas.current && ctx) {
          canvas.current.width = w * ratio // 实际渲染像素
          canvas.current.height = h * ratio // 实际渲染像素
          canvas.current.style.width = `${w}px` // 控制显示大小
          canvas.current.style.height = `${h}px` // 控制显示大小
          ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
        }
    
        if (ctx) {
          ctx.beginPath()
          ctx.lineWidth = 5
          ctx.strokeStyle = 'rgba(44, 104, 255, 0.06)'
          ctx.arc(w / 2, h / 2, 50, 0, Math.PI * 2)
          ctx.stroke()
    
          ctx.beginPath()
          ctx.lineWidth = 5
        //   ctx.strokeStyle =  as string
    
          // (Math.PI / 180) * 360
          ctx.arc(
            w / 2,
            h / 2,
            50,
            0,
            (percent >= max ? max : percent / 100) * Math.PI * 2,
            false
          )
          ctx.stroke()
    
          // const measureText = ctx?.measureText(`${percentage}%`)
          ctx?.beginPath()
          ctx.font = '20px sans-serif'
          ctx.textAlign = 'center'
          ctx?.fillText(value, w / 2, h / 2 + 10)
        }
    },[percent])

    const classes = classNames('progress',{
        [`cherry-components-${theme}`]:theme
    })

    return(
        <div className='cherry-progress' style={style}>
            <div className='progress-container'>
                <div className={classes} style={{width:value}}></div>
            </div>
            <span>{value}</span>
        </div>
    )
}
export default Progress