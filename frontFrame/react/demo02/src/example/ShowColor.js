import React,{useContext} from 'react'
import {ColorContext} from './color'

function ShowColor(props){
    const context  = useContext(ColorContext)
    console.log(context);
    return (
        <div style={{color:context.state.color}}>
            显示的颜色为{context.state.color}
        </div>
    )
}
export default ShowColor