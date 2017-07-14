import React from 'react'

let HOCGen = (Component, state) => class extends React.Component {
	constructor(props) {
		super(props)
		this.state=state
		
	}
	componentDidMount() {
		setInterval(()=>this.setState({count: this.state.count+1}), 1000)
	}
	render () {
		return <Component {...this.props} {...this.state} />
	}
}

let Comp1 = (props) => <p>Count: {props.count}</p>

let WrappComp1 = HOCGen(Comp1, {count:0})
let WrappComp2 = HOCGen(Comp1, {count:100})

let HOC = () => 
	<div>
		<WrappComp1 />
		<WrappComp2 />
	</div>
export default HOC
