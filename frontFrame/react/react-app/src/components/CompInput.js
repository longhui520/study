import React,{Component} from 'react'
import ReactDOM from 'react-dom'
export default function(props){
    return (<div>{props.children?props.children:'this is a Input'}</div>)
}