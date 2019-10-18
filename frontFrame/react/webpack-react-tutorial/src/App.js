import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import Test from './components/Test.js'
import Store from './store/reduxTest.js'
export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {value:""};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        Store.dispatch({
            type:'ADD_LIST',
            inputValue:this.state.value
        });
    }
    handleChange(event){
        this.setState({value:event.target.value})
    }
    handleClick2(){
        alert(Store.getState().list.join());
    }
    render(){
        return (
            <div>
                <input type= "text" value={this.state.value} onChange = {this.handleChange.bind(this)}/>
                <input type="button" value="提交"  onClick={this.handleClick}/>
                <Test />
                <input type= "button" value="数据" onClick={this.handleClick2.bind(this)}/>
            </div>
            
        ); 
    }
}
