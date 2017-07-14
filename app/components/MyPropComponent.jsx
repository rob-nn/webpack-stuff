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

MyPropComponent.propTypes = {
	name: React.PropTypes.string.isrequired,
	count: React.PropTypes.number
}

export default MyPropComponent
