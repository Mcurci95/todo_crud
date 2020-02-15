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
    }

    render() {
        return (
            <div>
                <p>Welcome to create todo Component!</p>
            </div>
        )
    }
}