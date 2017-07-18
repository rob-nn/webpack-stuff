import React from 'react'
import ReactDOM from 'react-dom'

import constants from './constants/app-constants.js'
import {incrementActions} from './actions/app-actions.js'
import {TodoStore} from './stores/count-store.js'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			count:0
		}
		this.increment = this.increment.bind(this)
	}
	componentDidMount() {
		TodoStore.addChangeListener(this._onChange)
	}
	componentWillUnmount() {
		TodoStore.removeChangeListener(this._onChange)
	}
	_onChange() {
		this.setState({
			count: TodoStore.getCount()
		})
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

ReactDOM.render(<App />, document.getElementById('app')) 
