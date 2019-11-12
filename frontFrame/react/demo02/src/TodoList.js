import React, { Component } from 'react';
import TodoListUI from './TodoListUI'
import store from './store'
import {addListAction,deleteItemAction,changeInputValueAction} from './store/createActions'

class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.addList = this.addList.bind(this)
        this.setInputValue = this.setInputValue.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.setInputValue)
    }
    render() { 
        return ( 
           <TodoListUI
                inputValue = {this.state.inputValue}
                changeInputValue={this.changeInputValue}
                addList = {this.addList}
                deleteItem = {this.deleteItem}
                list = {this.state.list}
           ></TodoListUI>
         );
    }
    changeInputValue(e){
        store.dispatch(changeInputValueAction(e.target.value))
    }
    addList(){
        console.log(11)
        store.dispatch(addListAction(this.state.inputValue))
    }
    setInputValue(){
        this.setState(store.getState())
    }
    deleteItem(index){
        store.dispatch(deleteItemAction(index))
    }
}
 
export default TodoList;