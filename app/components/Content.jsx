import React from 'react'

let Content = props => 
	<div>
		<p>Init Content</p>
		<p>{props.children}</p>
		<p>End Content</p>
	</div>

export default Content
