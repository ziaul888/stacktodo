import React from 'react'
import {CustomInput, Label} from "reactstrap"
import PropTypes from 'prop-types'

const ViewControl = ({view, changeView})=>(
    <div className="d-flex">
        <Label for='list-view' className="mr-4">
           <CustomInput
           type="radio"
           id="list-view"
           name="view"
           value="list"
           onChange={changeView}
           className="d-inline-block"
           checked={view === 'list'}
           />
           List View
        </Label>
        <Label for='table-view' className="mr-4">
           <CustomInput
           type="radio"
           id="table-view"
           name="view"
           value="table"
           onChange={changeView}
           className="d-inline-block"
           checked={view === 'table'}
           />
           Table View
        </Label>
    </div>
)
ViewControl.propTypes={
    changeView:PropTypes.func.isRequired,
    view:PropTypes.string.isRequired
}
export default ViewControl