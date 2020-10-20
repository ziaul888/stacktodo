import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem, CustomInput, Button, ListGroup} from 'reactstrap'

//
const ListItem =({todo, toggleSelect, toggleCompleate })=>{
return(
<ListGroupItem className="d-flex align-center ">
    <CustomInput type="checkbox" id={todo.id} checked={todo.isSelect} onChange={()=>toggleSelect(todo.id)}
        />
        <div className="mx-3">
            <h4>{todo.text}</h4>
            <p> {todo.time.toDateString()}</p>
        </div>
        <Button className="ml-auto" color={todo.isComplate ? 'danger' : 'success' } onClick={()=>
            toggleCompleate(todo.id)}>{todo.isComplate ? 'compelte': 'running'}</Button>
</ListGroupItem>
)
}

ListItem.propType={
todo:PropTypes.object.isRequired,
toggleSelect:PropTypes.func.isRequired,
toggleCompleate:PropTypes.func.isRequired

}

const ListView =({todos,toggleCompleate,toggleSelect})=>{
return(
<ListGroup>
    {todos.map(todo=>(
    <ListItem key={todo.id} todo={todo} toggleSelect={toggleSelect} toggleCompleate={toggleCompleate} />
    ))}

</ListGroup>
)
}
ListView.propType={
todos:PropTypes.object.isRequired,
toggleSelect:PropTypes.func.isRequired,
toggleCompleate: PropTypes.func.isRequired}

export default ListView