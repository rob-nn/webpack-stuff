import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

class Profile extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render () {
		let hobbies = this.props.hobbies.map(hobbie => {
			return (<li>{hobbie}</li>)
		})
		return (
			<div>
				<h2>{this.props.name}</h2>
				<p>
					{this.props.name} is {this.props.age} and{this.props.bio}</p>
				<h3>Hobbies</h3>
				<ul>
					{hobbies}
				</ul>
			</div>
		)
	}
}

class App extends React.Component {
	constructor(props) {
	       super(props)
	       this.state = {
		       profiles: [
			       {
				       name: 'Sue',
				       age: 30,
				       bio: 'engoy swimming and biking',
				       hobbies: ['swimming', 'biking']
			       },
			       {
				       name: 'Bill',
				       age: 40,
				       bio: 'enjoys long walks on the beach',
				       hobbies: ['gardening', 'games']
			       }
		       ]
	       }
	}	       
	addProfile(e) {
		let user = {
			name:'Joe',
			age:40,
			bio:'like sports',
			hobbies:['basketball', 'baseball']
		}
		this.setState(
			{
				profiles: this.state.profiles.concat([user])
			}
		)
	}

	render () {
		let profiles = this.state.profiles.map(profile=> {
			return (
				<Profile 
					name={profile.name}
					age= {profile.age}
					bio= {profile.bio}
					hobbies = {profile.hobbies}
				/>
			)
		})
		return (
			<div>
				<h1>Profiles</h1>
				{profiles}
				<button onClick={this.addProfile.bind(this)}>Add new profile</button>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
