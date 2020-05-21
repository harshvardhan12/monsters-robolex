import React from 'react';
import './searchBox.css';

const searchbox = ({placeholder, handleChange}) => {
    return(
        <input className="search"
        type="search" 
        placeholder={placeholder}
        onChange={handleChange} />
    );
}

export default searchbox;

// (event) => this.searchBoxHandler(event)