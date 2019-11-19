import React,{createContext,useReducer} from 'react'

export const ColorContext = createContext({})
export const UPDATE_COLOR = 'update_color'

function reducer(state,action){
    switch(action.type){
        case UPDATE_COLOR:
            return {color:action.color}
        default:
            return state    
    }
}

function Color(props){
    const [state,dispatch] = useReducer(reducer,{color:'blue'})
    return (
        <div>
            <ColorContext.Provider value={{state:state,dispatch:dispatch}}>
                {props.children}
            </ColorContext.Provider>
        </div>
    )
}
export default Color
