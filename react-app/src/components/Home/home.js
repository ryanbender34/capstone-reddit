import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getThreads } from '../../store/threads';
import { getCategories } from '../../store/categories';
import ThreadCard from '../ThreadCard/threadcard';
import './home.css';
import Filter from '../Filter/filter';
import Welcome from '../Welcome/welcome';

const Home = () => {
    const dispatch = useDispatch();
    // window.scrollTo(0,0);



    let newFilter = document.querySelector('.filter-option-new');
    if (newFilter) {
        newFilter.style.backgroundColor = '#E0E0E0'
    }

    useEffect(() => {
        dispatch(getThreads());
        dispatch(getCategories());
    }, [dispatch]);

    const allThreads = useSelector(state => {return state.threads})
    const allThreadsArr = Object.values(allThreads)


 
    // const projectsBasketball = Object.values(allThreads).filter(thread => thread.categoryId === 1)
    // const projectsFootball = Object.values(allThreads).filter(thread => thread.categoryId === 2)

    return (
        <>
        <div className="home-container">
            <Welcome />
            <div className="home-column-1">
                <div className="thread-container">
                <Filter></Filter>
                    {allThreadsArr.slice(0).reverse().map(thread => {
                        return (
                            <ThreadCard key ={thread.id} thread={thread}></ThreadCard>
                            )
                        })}
                </div>
            </div>
        </div>
        </>
    )

}

export default Home;