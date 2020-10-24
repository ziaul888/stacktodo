import React from 'react'
import {CustomInput, Button,Table} from 'reactstrap'
import PropTypes from 'prop-types'

const  RowItem=({todo,toggleComplete, toggleSelect})=>


    (
     <tr>
         <td scope="row">
           <CustomInput
           type="checkbox"
           id={todo.id}
           checked={todo.isSelect}
           onChange={()=>toggleSelect(todo.id)}
           />
         </td>
         <td>
             {todo.time.toString()}
         </td>
    <td>{todo.text}</td>
     <td>
         <Button color={todo.isComplete ? 'danger' : 'success' } onClick={()=>
            toggleComplete(todo.id)}>
                {todo.isComplete ? 'completed': 'running'}

         </Button>
     </td>
     </tr>    
    )


RowItem.propType={
    todo:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
    
    }

const TableView =({todos,toggleSelect,toggleComplete})=>(
 <Table>
     <thead>
         <tr>
             <td>#</td>
             <td>time</td>
             <td>todo</td>
             <td>Action</td>
         </tr>
     </thead>
     <tbody>
          {
              todos.map(todo=>(
                <RowItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                toggleSelect={toggleSelect}
                />
                ))
          }
     </tbody>
 </Table>   
)
TableView.propType={
    todos:PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired}
    
    export default TableView