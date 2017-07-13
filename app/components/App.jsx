import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'
import {getProfiles} from '../utils/profileApi.js'

let MyComponent = props => <p>My Component!</p>

export default class App extends React.Component {
	constructor(props) {
	       super(props)
	       this.state = {
		       profiles:[] 
	       }
	       this.addProfile = this.addProfile.bind(this)
	}	       
	addProfile(newUser) {
		this.setState(
			{
				profiles: this.state.profiles.concat([newUser])
			}
		)
	}

	componentDidMount() {

		getProfiles()	
		.then(data=>this.setState({profiles:data}))
		.catch(err=>{
			console.log(err)
		})
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
				<MyComponent />
				<h1>Profiles</h1>
				{profiles}
				<AddProfile addUser={this.addProfile} />
			</div>
		)
	}
}
