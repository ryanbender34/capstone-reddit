import React, {useState} from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar, faFireFlameCurved, faRocket} from '@fortawesome/free-solid-svg-icons'
import './catfilter.css';

const CategoryFilter = () => {
    const {categoryId} = useParams();

    const url = window.location.href;
    const urlParts = url.split("/")
    const lastUrl = urlParts[urlParts.length - 1]

    if ((lastUrl == "best" || lastUrl == "hot")) {
        console.log('guess it is true then')
        let chosenFilter = document.querySelector(`.filter-option-${lastUrl}`);
        if(chosenFilter) {
            chosenFilter.style.backgroundColor = '#E0E0E0';
        }
    } else {
        console.log('made it to else FE')
        let newFilter = document.querySelector(`.filter-option-new`)
        if(newFilter) {
            newFilter.style.backgroundColor = '#E0E0E0'
        }
    }

    console.log(urlParts, 'this is theurl')
return (
    <>
        <div className="filter-container">
            <NavLink className='filter-option filter-option-new' role='button' to={`/categories/${categoryId}`}>
            <FontAwesomeIcon icon={faCalendar}/>   <span className='filter-text'>New</span>            
            </NavLink>
            <NavLink className='filter-option filter-option-best' role='button' to={`/categories/${categoryId}/best`}>
            <FontAwesomeIcon icon={faRocket}/>   <span className='filter-text'>Best</span>          
                </NavLink>
            <NavLink className='filter-option filter-option-hot' role='button' to={`/categories/${categoryId}/hot`}>
            <FontAwesomeIcon icon={faFireFlameCurved}/>   <span className='filter-text'>Hot</span> 
                </NavLink>
        </div>
    </>
)
}

export default CategoryFilter;