import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getThreads } from '../../store/threads';
import Comment from '../Comment/comment';
import './threadpage.css';

const ThreadPage = () => {
    const {threadId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getThreads());
    }, [dispatch])

    let thisThread= [];

    const threads = useSelector(state => {
        return state.threads
    })


    for (const key in threads) {
        if (key === threadId) thisThread.push(threads[key]);
    }

    // .forEach(thread => {
    //     if (threadId === Object.keys(thread)[0]) {
    //         thisThread.push(thread)
    //     }
    // })


    return (
        <React.Fragment>
            {thisThread.map(thread => {
                return (
                    <li key={thread.id}>
                        <h3>{thread.title}</h3>
                        <p>{thread.updated_at}</p>
                        <p>{thread.description}</p>
                        <p>{thread.content}</p>
                    </li>
                    
                )
            })}
           <Comment />
        </React.Fragment>
    )

 }

 export default ThreadPage;
