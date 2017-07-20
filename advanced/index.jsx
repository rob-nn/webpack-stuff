import React from 'react'
import ReactDOM from 'react-dom'

import constants from './constants/app-constants.js'
import {incrementActions} from './actions/app-actions.js'
import {TodoStore} from './stores/count-store.js'
import Patient from './components/patient.jsx'

class CountApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count:0
		}
		this.increment = this.increment.bind(this)
		this._onChange = this._onChange.bind(this)
	}

	componentDidMount() {
		TodoStore.addChangeListener(this._onChange)
	}
	componentWillUnmount() {
		TodoStore.removeChangeListener(this._onChange)
	}
	_onChange() {
		console.log(`1 - Count: ${this.state.count}`)
		this.setState({
			count: TodoStore.getCount()
		})
		console.log(`2 - Count: ${this.state.count}`)
	}

	increment () {
		incrementActions.incrementCount()
	}
	render () {
		return (
			<div>
				<p>Count: {this.state.count}</p>
				<button onClick={this.increment} > Increment</button>
			</div>
		)
	}
}

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	render () {
		return (
			<div>
				<CountApp />
				<Patient />
			</div>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('app')) 
