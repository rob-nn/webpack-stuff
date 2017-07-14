import React from 'react'

export default class AddProfile extends React.Component {
	//needs addUser
	constructor(props) {
		super(props)
		this.state = {
			name : '', 
			age : '', 
			bio : '', 
			hobby: '' 
		}

		this.handleName = this.handleName.bind(this)
		this.handleAge = this.handleAge .bind(this)
		this.handleBio = this.handleBio .bind(this)
		this.handleHobbies = this.handleHobbies.bind(this)
		this.handleAddUserClick = this.handleAddUserClick.bind(this)
	}
	handleName(e) {
		this.setState({name: e.target.value})
	}
	handleAge(e) {
		this.setState({age: e.target.value})
	}
	handleBio(e) {
		this.setState({bio: e.target.value})
	}
	handleHobbies(e) {
		this.setState({hobby:e.target.value})
	}
	handleAddUserClick(e) {
		let newUser = {
			name: this.state.name,
			age: this.state.age,
			bio: this.state.bio,
			hobbies: [this.state.hobby]
		}
		this.props.addUser(newUser)
	}

	render () {
		return (
				<div>
					<p> {this.state.name}, {this.state.age}, {this.state.bio}</p>
					<input onChange={this.handleName} value={this.state.name}/>
					<input onChange={this.handleAge} value={this.state.age}/>
					<input onChange={this.handleBio} value={this.state.bio}/>
					<input onChange={this.handleHobbies} value={this.state.hobby}/>
					<button onClick={this.handleAddUserClick}>Add new profile</button>
				</div>
		       )
	}
}
