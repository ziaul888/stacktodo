import React from 'react'
import {Button, ButtonGroup} from "reactstrap"
import PropTypes from 'prop-types'

const  BulkController =  ({clearSelected, clearCompleted, reset})=>(
    <ButtonGroup>
        <Button color="danger" onClick={clearSelected}>clear selected</Button>
        <Button color="danger" onClick={clearCompleted}>clear Completed</Button>
        <Button color="danger" onClick={reset}>Reset</Button>
    </ButtonGroup>
)

BulkController.propTypes={
     clearCompleted:PropTypes.func.isRequired,
     clearSelected:PropTypes.func.isRequired,
     reset:PropTypes.func.isRequired

}

export default BulkController