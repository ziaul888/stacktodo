import React, { Component } from 'react';
import ListView from '../listView';
import TableView from '../tableview';


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

            }
         ]
         
     }

     toggleCompelete=(todoId)=>{

     }
    toggleSelect=(todoId)=>{

    }


    render() {
        return (
            <div className="dispaly-4 text-center mb-2">
                <h1> Stack todos</h1>
                <div>
                <ListView todos={this.state.todos}
                toggleCompleate={this.state.toggleCompelete}
                toggleSelect={this.toggleSelect}/>
                <TableView
                todos={this.state.todos}
                toggleCompleate={this.state.toggleCompelete}
                toggleSelect={this.toggleSelect}/>
                </div>
            </div>
        );
    }
}

export default Todos;