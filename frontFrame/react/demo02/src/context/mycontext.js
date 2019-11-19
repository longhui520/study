import React , {useContext,createContext} from 'react'

const MyContext = createContext();

function Child(props){
    const context = useContext(MyContext)
    return (
        <div>
            {context.count}-{context.name}
        </div>
    )
}

function Parent(props){
    return (
        <div>
             <MyContext.Provider value={{count:1,name:'这是父组键提供的'}} >
                <Child></Child>
            </MyContext.Provider>
        </div>
       
    )
}
export default Parent