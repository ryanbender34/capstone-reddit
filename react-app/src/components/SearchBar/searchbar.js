import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSearchThreads } from '../../store/search';
import './searchbar.css';

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
            <form action='/api/search/' method='GET'>
                <input
                    id='search-input'
                    type='text'
                    placeholder="thread title..."
                    className='search-bar'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    required
                />
                <button type='submit' onClick={searchSubmit}>
                    <img id='search-icon' src='https://res.cloudinary.com/jenn/image/upload/v1644450194/teachables/magnifier_dzmddk.png' alt='Search icon' className='search-button' onClick={searchSubmit}/>
                </button>
            </form>
        </>
    )
};

export default SearchBar;