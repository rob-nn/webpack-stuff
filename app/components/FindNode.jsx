import React from 'react'
import ReactDOM from 'react-dom'

export default class FindNode extends React.Component {
	constructor(props) {
		super(props)
		this.state = { 
			input:""
		}
		this.handle = this.handle.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	handle(e) {
		this.setState({
			input: e.target.value
		})
	}

	handleClick(e) {
		this.setState({
			input: ''
		}, () => ReactDOM.findDOMNode(this.refs.inputBox).focus()
		)
	}

	render () {
		return (
			<div>
				<input onChange={this.handle} value={this.state.input} ref='inputBox'/>
				<button onClick={this.handleClick}>clear</button>
			</div>
		)
	}

}

