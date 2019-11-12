import React,{Component} from 'react'

class Test extends Component{
    shouldComponentUpdate(){
        return false;
    }
    render(){
        console.log('组件渲染了')
        return <span>11111</span>
    }
}
class HelloWorld extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:111
        }
    }
    change(e){
        this.setState({
            value:e.target.value
        })
    }
    render(){
        return (
            <div>
                <input value={this.state.value} onChange={this.change.bind(this)}/>
                <Test></Test>
                <div>{this.props.msg}</div>
            </div>
           
        )
    }
}
export default HelloWorld