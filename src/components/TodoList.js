import React from "react";


class TodoList extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
			<ul>
				{this.props.list.map(task =>(
					<li key={task.date}>{task.description}</li>
				))}
			</ul>
		)
	}
}
export default TodoList;