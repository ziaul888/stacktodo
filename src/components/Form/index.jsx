import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { FormGroup, Form, Label, Input, Button } from 'reactstrap';

class TodoForm extends Component {

    state={
       text:'',
       descriptrtion: ""
    }
    hnadleChange=(event)=>{
        this.setState({
              [event.target.name]:event.target.value
        })
    }
    hnadleSubmit=event=>{
        event.preventDafault()
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({text:'', descriptrtion:''})
    }
    render() {
        return (
            <div>
               
               <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <label>Enter task</label>
                        <Input
                        type="text"
                        placeholder="do osme code"
                        name="text"
                        value={this.state.text}
                        onChange={this.hnadleChange}
                        />
                    </FormGroup>

                </Form>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <label>Describe TAsk</label>
                        <Input
                        type="textarea"
                        placeholder="do osme code"
                        name="descriptrtion"
                        value={this.state.descriptrtion}
                        onChange={this.hnadleChange}
                        />
                    </FormGroup>

                </Form>
            </div>
        );
    }
}

TodoForm.propType ={
    createTodo: PropTypes.func.isRequired
};

export default TodoForm;

