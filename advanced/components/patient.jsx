import React from 'react'
import Proptypes from 'prop-types'

class PatientForm extends React.Component {

}

class PatientDetails extends React.Component {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<div>
				<p>Name: {this.props.name}</p>
				<p>Address: {this.props.address}</p>
			</div>
	       )
	}
}
PatientDetails.propTypes = {
	name: Proptypes.string.isRequired,
	address: Proptypes.string
}

class Patient extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
		}
		this.setName = this.setName.bind(this)
		this.setAddress = this.setAddress.bind(this)
	}
	setName(e) {
		this.setState({
			name: e.target.value
		})
	}
	setAddress(e) {
		this.setState({
			address: e.target.value
		})
	}
		
	getForm() {
		return (
			<div>
				<input onChange={this.setName} value={this.state.name} />
				<input onChange={this.setAddress} value={this.state.address} />
				<button onClick={this.savePatient}> Save </button>
			</div>
	       )
	}
	getDetails() {
		console.log(`Name: ${this.state.name}`)
		return (
			<PatientDetails 
				name={this.state.name} 
				address={this.state.address}
			/>
	       )
	}
	render () {
		return (
			<div>
				{this.getForm()}
				{this.state.name?this.getDetails():''}
			</div>
	       )
	}
}

export default Patient
