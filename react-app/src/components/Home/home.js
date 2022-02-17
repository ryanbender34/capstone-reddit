import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getThreads } from '../../store/threads';
import { getCategories } from '../../store/categories';
import './home.css';

const Home = () => {
    const dispatch = useDispatch();
    window.scrollTo(0,0);

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
            <h1>Welcome to Scouttit</h1>
            <Link to='/create'>Create a thread!</Link>
            <div className="thread-container">
                {allThreadsArr.map(thread => {
                    return (
                        <li key={`homeli-${thread.id}`} className={`homethread thread-${thread.id}}`}>
                            <h2>{thread.title}</h2>
                            <p>{thread.description}</p>
                        </li>
                    )
                })}
            </div>
        </>
    )

}

export default Home;