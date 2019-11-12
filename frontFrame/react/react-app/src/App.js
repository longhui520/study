import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import CompInput from './components/CompInput'
import CompRadio from './components/CompRadio'
import { Button } from 'element-react';
import 'element-theme-default';

var components = {
    CompInput,
    CompRadio,
    Button
}
var nodes = {
        components:'div',
        data:null,
        children:[
            {
                components:'CompInput',
                data:{},
                children:[]
            },
            {
                components:'CompInput',
                data:{},
                children:"222222"
            }
        ]
    }
var nodes2 = {
    components:'div',
    data:{
        type:"primary"
    },
    children:[{components:'div',data:{className:'111',onClick:function(){
        console.log(1);
    }},children:'11111'}]
}    
export default class App extends Component{
    render(){
        function create(nodes){
            if(Object.prototype.toString.call(nodes) == '[object String]'){
                return nodes
            }
            if(Object.prototype.toString.call(nodes) == '[object Array]'){
               return  nodes.map((node,index) => {
                    var children = null
                    if(Array.isArray(node.children) && node.children.length>0){
                        children = create(node.children)
                    }else if(typeof(node.children) == 'string'){
                        children = node.children
                    }
                   return React.createElement(components[node.components]||node.components,Object.assign(node.data,{key:index}),children)
                })
            }
            if(Object.prototype.toString.call(nodes) == '[object Object]'){
                return  React.createElement(components[nodes.components]||nodes.components,nodes.data,create(nodes.children))
            }
            return null;
        }
       return create(nodes2)
    }
}