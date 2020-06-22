import React, { useState } from "react";
import PropTypes from 'prop-types';

import '../styles/search-form.css'

const SearchForm = (props) => {

    const [searchText, setSearchtext] = useState('')


    const handleInputChange = (e) => {
       setSearchtext(e.target.value);
    }
 
    return(
        <div className='search-form'>
        <input 
            type='text' 
            value={searchText}
            onChange={handleInputChange} 
            placeholder='City name please'
            >
        </input>
        <button 
            type='submit'
            onClick={()=>props.onClick(searchText)}>
            Search
        </button>
        </div>
    )
};

SearchForm.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default SearchForm;