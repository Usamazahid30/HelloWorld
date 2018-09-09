import React ,{Component} from 'react';

class Button extends Component {
	render(){
	return (
	<span>
	<button className={this.props.className}>{this.props.value1}</button>
	<button className={this.props.className}>{this.props.value2}</button>
	<button className={this.props.className}>{this.props.value3}</button>
	</span>
)

	}
}


export default Button;