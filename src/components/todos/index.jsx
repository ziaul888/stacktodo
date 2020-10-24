import React, { Component } from 'react';
import shortid from "shortid"
import ListView from '../listView';
import TableView from '../tableview';
import Controller from '../controller'
import {Modal, ModalBody, ModalHeader} from "reactstrap"
import TodoForm from '../Form';


class Todos extends Component {

     state ={
         todos :[
             {
                 id:'aewasjdrfk234red',
                 text:'main todo text',
                 time : new Date(),
                 isComplete:false,
                 isSelect:false

             },
             {
                id:'aewasjdrfk984red',
                text:'main todo text',
                time : new Date(),
                isComplete:false,
                isSelect:false

            },
            {
                id:'aewasjdrfk084red',
                text:'main todo text',
                time : new Date(),
                isComplete:false,
                isSelect:false

            }
         ],
         isOpenTodoForm:false,
         searchTerm:"",
         view:'list'
         
     }

     toggleComplete=(todoId)=>{
        const todos = [...this.state.todos]
        const todo = todos.find(t=>t.id ===todoId)
        todo.isComplete= !todo.isComplete

        this.setState({todos})

     }
    toggleSelect=(todoId)=>{
        const todos = [...this.state.todos]
        const todo = todos.find(t=>t.id ===todoId)
        todo.isSelect= !todo.isSelect

        this.setState({todos})

    }
    handleSearch=()=>{

    }
   toggleForm=()=>{
    this.setState({
        isOpenTodoForm: !this.state.isOpenTodoForm   
    })        
   }
   createTodo = todo => {
    todo.id = shortid.generate();
    todo.time = new Date();
    todo.isComplete = false;
    todo.isSelect = false;

    const todos = [todo, ...this.state.todos];
    this.setState({ todos });
    this.toggleForm();
};

    handleFilter =()=>{

    }
    changeView =(event)=>{
        this.setState({
            view:event.target.value
        })
    }
    clearSelected =()=>{
        
    }
    clearCompleted =()=>{
        
    }
    reset=()=>{
        
    }

    getView=()=>{
        return this.state.view === "list" ? (
            <ListView todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}/>
        ):(
            <TableView
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}/>
        )
    }

    render() {
        return (
            <div className="dispaly-4 text-center mb-2">
                <h1> Stack todos</h1>
                <Controller
                term={this.state.searchTerm}
                toggleForm={this.toggleForm}
                handleSearch={this.handleSearch}
                view={this.state.view}
                changeView={this.changeView}
                clearCompleted={this.clearCompleted}
                clearSelected={this.clearSelected}
                reset={this.reset}

                />
                <div>

                {this.getView()}
                </div>

                <Modal
					isOpen={this.state.isOpenTodoForm}
					toggle={this.toggleForm}
				>
					<ModalHeader toggle={this.toggleForm}>
						Create New Todo Item
					</ModalHeader>
					<ModalBody>
						<TodoForm createTodo={this.createTodo} />
					</ModalBody>
				</Modal>
                
            </div>
        );
    }
}

export default Todos;