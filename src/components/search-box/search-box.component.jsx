import React from 'react';
import './search-box.styles.css';

/*
** Functional components do not have access to the state or lifecycle methods as Class components do. Just a component to render HTML using given props
** search-box: FUNCTIONAL Component
** App: CLASS Component
*/

export const SearchBox = ({ placeholder, handleChange }) => (
	<input
		className='search'
		type='search' 
		placeholder={placeholder}
		onChange={handleChange} //this.setState is asynchronous
	/>
);