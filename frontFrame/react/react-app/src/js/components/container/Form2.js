import React,{Component} from 'react'
import ReactDOM from 'react-dom'
class NameForm extends Component {
    constructor(props){
        super(props);
        this.state = {value:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value});
    }
    handleSubmit(event){
        alert('提交的名字：'+this.state.value);
        event.preventDefault();
    }
    render(){
        return (
            <form onSubmit ={this.handleSubmit} >
                <label>
                    名字:
                    <input type = "text" value = {this.state.value}  onChange={this.handleChange}/>
                </ label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}
export default NameForm;
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<NameForm />,wrapper) : false;