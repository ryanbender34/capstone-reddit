import React from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendar, faFireFlameCurved, faRocket} from '@fortawesome/free-solid-svg-icons'
import './filter.css';




const Filter = () => {
    const {url} = useParams()
    console.log(url, 'this is the url')
    
return (
    <>
        <div className="filter-container">
            <a className='filter-option filter-option-new' role='button' href='/new'>
                <FontAwesomeIcon icon={faCalendar}/>   <span className='filter-text'>New</span>            
            </a>
            <a className='filter-option filter-option-best' role='button' href='/best'>
                <FontAwesomeIcon icon={faRocket}/>   <span className='filter-text'>Best</span>          
            </a>
            <a className='filter-option filter-option-hot' role='button' href='/hot'>
                <FontAwesomeIcon icon={faFireFlameCurved}/>   <span className='filter-text'>Hot</span> 
            </a>
        </div>
    </>
)
}

export default Filter;