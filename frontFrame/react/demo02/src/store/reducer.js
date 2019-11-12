import { ADD_LIST,CHANGE_INPUT_VALUE,DELETE_ITEM } from "./actionTypes"
const defaultState = {
    inputValue: '',
    list:[
        '8:00 开早会',
        '9:00 需求沟通',
        '10:00 写代码'
    ]
}
export default function(state = defaultState,action){
    if(action.type === CHANGE_INPUT_VALUE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(action.value)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState
    }
    return state
}