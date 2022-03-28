import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getThreads } from '../../store/threads';
import { getCategories } from '../../store/categories';
import ThreadCard from '../ThreadCard/threadcard';
import './best.css';
import Welcome from '../Welcome/welcome';
import Filter from '../Filter/filter';

const Best = () => {
    const dispatch = useDispatch();
    // window.scrollTo(0,0);

    let bestFilter = document.querySelector('.filter-option-best');
    if (bestFilter) {
        bestFilter.style.backgroundColor = '#E0E0E0'
    }

    useEffect(() => {
        dispatch(getThreads());
        dispatch(getCategories());
    }, [dispatch]);
    
    const allThreads = useSelector(state => {return state.threads})
    const allThreadsArr = Object.values(allThreads)

    
        
    // todo - only sort this when the page loads
    
    allThreadsArr.sort(function (a, b) {
        let aCount = 0;
        let bCount = 0;
        a.votes.forEach(vote => {
            aCount += vote.value
        })
        b.votes.forEach(vote => {
            bCount += vote.value
        })
        return bCount - aCount
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

export default Best;