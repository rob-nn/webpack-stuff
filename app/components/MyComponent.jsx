import React from 'react'

class MyPropComponent extends React.Component {
	render () {
		return (
				<div>
					<p>Name: {this.props.name}</p>
					<p>Count: {this.props.count}</p>

				</div>
		       )
	}
}

export default MyPropComponent
