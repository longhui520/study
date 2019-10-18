import {createStore} from 'redux';
const defaultState = {
    list:['1','2','3']
}
const Store = createStore((state=defaultState,action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_LIST':{
            return {
                ...state,
                list:[...state.list,action.inputValue]
            }
        }
        default:
         break;
    }
    return state;
})
export default Store