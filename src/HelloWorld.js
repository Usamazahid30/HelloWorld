import React, {Component} from "react";
class Hello extends Component {
	render (){
	return <span>Hello</span>
	}
}
export default class World extends Component {
	render(){
	return <div> <Hello /> World</div> 
	}
}