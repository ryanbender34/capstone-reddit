import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getThreads } from '../../store/threads'
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    window.scrollTo(0,0);

    useEffect(() => {
        dispatch(getThreads())
    }, [dispatch]);

    const allThreads = useSelector(state => {
        return state.threads
    })

    // const projectsBasketball = Object.values(allThreads).filter(thread => thread.categoryId === 1)
    // const projectsFootball = Object.values(allThreads).filter(thread => thread.categoryId === 2)


    return (
        <>
            <h1>Welcome to Scouttit</h1>
            {/* <div className="thread-container">
                {allThreads.map(thread => {
                    return (
                        <li key={`homeli-${thread.id}`} className={`thread-${thread.id}}`}></li>
                    )
                })}
            </div> */}
        </>
    )

}

export default Home;