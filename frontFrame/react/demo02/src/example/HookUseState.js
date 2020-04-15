import React,{memo,useState,useEffect,useRef} from 'react'
import { Button } from 'antd'

// const Child = memo(({data})=>{
//     console.log('child render...',data)
//     const [name,setName] = useState(data)
//     return (
//         <div>
//             <div>child</div>
//             <div>{name}---{data}</div>
//         </div>
//     )
// })
const Child = ({data})=>{
    console.log('child render...',data)
    const [name,setName] = useState(data)
    return (
        <div>
            <div>child</div>
            <div>{name}---{data}</div>
        </div>
    )
}
const HookUseState = ()=>{
    console.log('Hook render...')
    const [count,setCount] = useState(0)
    const [name,setName] = useState('rose')
    // useEffect(() => {
    //     console.log('use effect...',count)
    //     const timer = setInterval(() => {
    //         console.log('timer...count:', count)
    //         setCount(count + 1)
    //     }, 1000)
    //     return ()=> clearInterval(timer)
    // },[])
    const countRef = useRef(0)
    useEffect(() => {
        console.log('use effect...',count)
        const timer = setInterval(() => {
            console.log('timer...count:', countRef.current)
            setCount(++countRef.current)
        }, 1000)
        return ()=> clearInterval(timer)
    },[])
    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>setCount(count+1)}>update count</button>
            {/* <button onClick={()=>setName('jack'+Math.random())}>update name</button> */}
            <button onClick={()=>setName('jack')}>update name</button>
            <Child data={name}></Child>
        </div>
    )
}
// class HookUseState extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {name:'rose'}
//     }
//     render(){
//         console.log('重新渲染')
//         return (
//             <div>
//                 <button onClick={()=>this.setState({name:'jack'})}>update name</button>
//                 <Child data={this.state.name}></Child>
//             </div>
            
//         )
       
//     }
// }
export default HookUseState

// 总结 
// [state,setState] = useState(defaultValue) 只会在首次渲染使用默认值即后面的state只能由setState改变
// setState 设置相同值时，只会第一次相同值触发组件的更新
// useEffect 中使用 state 是固化的，触发重新触发useEffect函数