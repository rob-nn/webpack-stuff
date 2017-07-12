import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
	       super(props)
	       this.state = {
		       profiles: [
			       {},
			       {},
			       {}
		       ]
	       }
	}	       
	render () {
		return (<p>Hello</p>)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
