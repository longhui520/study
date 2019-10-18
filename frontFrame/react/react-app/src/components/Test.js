import React,{Component} from 'react'
import Store from '../store/reduxTest.js'
export default class Test extends Component{
    constructor(props){
        super(props)
        this.state = Store.getState();
        Store.subscribe(this.handleStoreUpdate.bind(this));
    }
    handleStoreUpdate(){
        this.setState(Store.getState());
    }
    render(){
        return (
            <div>
                <ul>
                    {this.state.list.map((value,index)=>{ return (<li index={index} key={index}>{value}</li>)})}
                </ul>
            </div>    
        )
    }
}