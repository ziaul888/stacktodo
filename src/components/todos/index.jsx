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
                text:'text',
                time : new Date(),
                isComplete:false,
                isSelect:false

            },
            {
                id:'aewasjdrfk084red',
                text:'new  text',
                time : new Date(),
                isComplete:false,
                isSelect:false

            }
         ],
         isOpenTodoForm:false, 
         searchTerm:"",
         view:'list',
         filter:"all"
         
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
    handleSearch=(value)=>{
    this.setState({
        searchTerm:value
    })
    }
    
    performSearch=()=>{
      return this.state.todos.filter(todo =>todo.text.toLowerCase()
      .includes (this.state.searchTerm.toLowerCase()))  
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

    handleFilter =filter=>{
       this.setState({filter})
    }

    performFilter = todos => {
		const { filter } = this.state;
		if (filter === 'completed') {
			return todos.filter(todo => todo.isComplete);
		} else if (filter === 'running') {
			return todos.filter(todo => !todo.isComplete);
		} else {
			return todos;
		}
	};

    changeView =(event)=>{
        this.setState({
            view:event.target.value
        })
    }
    clearSelected =()=>{
        const todos =this.state.todos.filter(todo =>!todo.isSelect)
        this.setState({todos})
    }
    clearCompleted =()=>{
        const todos =this.state.todos.filter(todo =>!todo.isComplete)
        this.setState({todos})
    }
    reset=()=>{
        this.setState({
            filter:"all",
            searchTerm:"",
            view:"list",
            isOpenTodoForm:false

        })
    }

    getView=()=>{
        let todos =this.performSearch();
        todos= this.performFilter(todos);
        
        return this.state.view === "list" ? (
            <ListView todos={todos}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}/>
        ):(
            <TableView
            todos={todos}
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