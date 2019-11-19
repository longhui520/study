import React,{useContext} from 'react'
import Color,{ColorContext,UPDATE_COLOR} from './color'
import ShowColor from './ShowColor'

function Buttons(props){
    const {dispatch} = useContext(ColorContext)
    return (
        <div>
            <button onClick={()=>dispatch({type:UPDATE_COLOR,color:'green'})}>绿色</button>
            <button onClick={()=>dispatch({type:UPDATE_COLOR,color:'red'})}>红色</button>
        </div>
      
    )
}
function ChangeColor(props){
    return (
        <Color>
            <ShowColor></ShowColor>
            <Buttons></Buttons>
        </Color>
    )
}
export default ChangeColor