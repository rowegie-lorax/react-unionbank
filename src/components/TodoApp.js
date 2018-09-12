import React from "react";
import TodoList from "./TodoList";


class TodoApp extends React.Component {
	constructor(props){
		super(props);
		this.state = { items: [], todo: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return(
			<div>
				<TodoList list={this.state.items}/>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="new-todo"> What needs to be done ?  </label> <br/>
					<input type="text" id="new-todo" onChange={this.handleChange} value={this.state.todo}/>
					<input type="submit" value="Add Task" onSubmit={this.handleSubmit} />
				</form>
			</div>
		)
	}

	handleChange(e){
		this.setState({todo: e.target.value})
	}

	handleSubmit(e){
		e.preventDefault();
		if (!(this.state.todo.length)){
			return;
		}
		const newTask = {
			description: this.state.todo,
			date: Date.now()
		}
		this.setState(prevState => ({
			items: prevState.items.concat(newTask),
			todo: ''
    	}));

	}	
}

export default TodoApp;