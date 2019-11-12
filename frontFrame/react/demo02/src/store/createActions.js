import { ADD_LIST,CHANGE_INPUT_VALUE,DELETE_ITEM } from "./actionTypes"

export const addListAction = (value)=>{
    return {
        type:ADD_LIST,
        value:value
    }
}
export const changeInputValueAction = (value)=>{
    return {
        type:CHANGE_INPUT_VALUE,
        value:value
    }
}
export const deleteItemAction = (index)=>{
    return {
        type:DELETE_ITEM,
        value:index
    }
}
