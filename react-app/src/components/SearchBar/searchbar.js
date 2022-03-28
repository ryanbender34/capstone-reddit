import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSearchThreads } from '../../store/search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './searchbar.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [search, setSearch] = useState('');

    const searchSubmit = async (e) => {
        e.preventDefault();
        await dispatch(getSearchThreads(search));
        history.push(`/search/${search}`);
        setSearch('');
    }

    return(
        <>
        <div className='search-container'>
            <form onSubmit={(e) => searchSubmit(e)} action='/api/search/' className='search-form' method='GET'>
                
                <input
                    id='search-input'
                    type='text'
                    placeholder='search by title...'
                    className='search-bar'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    required
                />
                <label className='form-label'> 
                    <div className="search-icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={(e) => searchSubmit(e)} />
                    </div>
                </label>
            </form>
        </div>
        </>
    )
};

export default SearchBar;