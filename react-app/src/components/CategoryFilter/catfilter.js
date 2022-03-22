import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRocket} from '@fortawesome/free-solid-svg-icons'
import './catfilter.css';

const CategoryFilter = () => {
    const {categoryId} = useParams();
return (
    <>
        <div className="filter-container">
            <a className='filter-option' role='button' href={`/categories/${categoryId}`}>
                <i className="icon icon-new">\new</i>
                
            </a>
            <a className='filter-option' role='button' href={`/categories/${categoryId}/best`}>
            <FontAwesomeIcon icon={faRocket}/>             
                </a>
            <a className='filter-option' role='button' href={`/categories/${categoryId}/hot`}>
                <i className="icon icon-new">\hot</i>
                
                </a>
        </div>
    </>
)
}

export default CategoryFilter;