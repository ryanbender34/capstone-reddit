import React from 'react';
import './filter.css';




const Filter = () => {
return (
    <>
        <div className="filter-container">
            <a className='filter-option' role='button' href='/new'>
                <i className="icon icon-new">\new</i>
                
            </a>
            <a className='filter-option' role='button' href='/best'>
                <i className="icon icon-new">\best</i>
                
                </a>
            <a className='filter-option' role='button' href='/hot'>
                <i className="icon icon-new">\hot</i>
                
                </a>
        </div>
    </>
)
}

export default Filter;