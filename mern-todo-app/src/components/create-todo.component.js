import React, { Component } from 'react';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priorty: '',
            todo_complete: false
        }
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target_value
        });
    }

    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible: e.target_value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priorty: e.target_value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("Submitting form");
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);


        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priorty: '',
            todo_complete: false
        });
    }

    render() {
        return (
            <div>
                <p>Welcome to create todo Component!</p>
            </div>
        )
    }
}