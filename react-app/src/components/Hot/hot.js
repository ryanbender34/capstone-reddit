import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getThreads } from '../../store/threads';
import { getCategories } from '../../store/categories';
import ThreadCard from '../ThreadCard/threadcard';
import './hot.css';
import Filter from '../Filter/filter';
import Welcome from '../Welcome/welcome';

const Hot = () => {
    const dispatch = useDispatch();
    // window.scrollTo(0,0);

    let hotFilter = document.querySelector('.filter-option-hot');
    if (hotFilter) {
        hotFilter.style.backgroundColor = '#E0E0E0'
    }
    
    useEffect(() => {
        dispatch(getThreads());
        // remove below? 
        dispatch(getCategories());
    }, [dispatch]);

    
    const allThreads = useSelector(state => {return state.threads})
    const allThreadsArr = Object.values(allThreads)

    allThreadsArr.sort(function (a, b) {
        return b.comments.length - a.comments.length
    })
 
    // const projectsBasketball = Object.values(allThreads).filter(thread => thread.categoryId === 1)
    // const projectsFootball = Object.values(allThreads).filter(thread => thread.categoryId === 2)

    return (
        <>
        <div className="home-container">
            <Welcome />
            <div className="thread-container">
                <Filter></Filter>
                    {allThreadsArr.map(thread => {
                        return (
                            <ThreadCard key ={thread.id} thread={thread}></ThreadCard>
                        )
                    })}
            </div>
        </div>
        </>
    )

}

export default Hot;