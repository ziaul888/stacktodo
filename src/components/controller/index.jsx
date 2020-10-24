import React from 'react'
import SearchPanel from "./Search-panel"
import PropTypes from 'prop-types'


const  Controller=({term,handleSearch,toggleForm})=>(
     <div>
         <SearchPanel
         term={term}
         handleSearch={handleSearch}
         toggleForm={toggleForm}
         />
     </div>
)

Controller.propTypes={
    term:PropTypes.string.isRequired,
    handleSearch:PropTypes.func.isRequired,
    toggleForm:PropTypes.func.isRequired
}
export default Controller
