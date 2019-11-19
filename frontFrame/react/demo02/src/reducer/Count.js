import React, { useReducer } from 'react';

const initialState = {count:1}

function reducer(state,action){
    switch(action){
        case 'add':
            return {count:state.count+1}
        default:
            return state
    }
}

function Count(props){
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
           <p>{state.count}</p>
           <button onClick={()=>dispatch('add')}>count+1</button>
        </div>
    )
}
export default Count
