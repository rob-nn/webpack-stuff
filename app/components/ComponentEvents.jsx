import React from 'react'
export default class ComponentEvents extends React.Component {
	constructor(props) {
		super(props)
		console.log('Constructor')
		this.state = {
			count: 0,
			intervalValue: null
		}
		this.periodic = this.periodic.bind(this)
		this.onClickHandle = this.onClickHandle.bind(this)
	}
	componentDidMount() {
		console.log('componentDidMount')
		this.setState({
			intervalValue: setInterval(this.periodic, 1000) 
		})
	}
	componentWillMount() {
		console.log('componentWillMount')
	}
	render () {
		console.log('render')
		return <p>Count: {this.state.count} <button onClick={this.onClickHandle}>Stop</button></p>
	}

	periodic() {
		this.setState({count: this.state.count+1})
	}
	onClickHandle(e) {
		console.log('onClickHandle')
		console.log(this.periodic)
		clearInterval(this.state.intervalValue)
	}

}
