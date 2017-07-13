import React from 'react'

let Profile = props =>	{
	return (
		<div>
			<h2>{props.name}</h2>
			<p>
				{props.name} is {props.age} and{props.bio}</p>
			<h3>Hobbies</h3>
			<ul>
				{props.hobbies.map(hobby=><li>{hobby}</li>)}
			</ul>
		</div>
	)
}

export default Profile
