import React from 'react';

// components
import Header from './../header/Header';


class Home extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
			</div>
		)
	}
}

export default Home;