import Cookies from "js-cookie";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getThreads, putThread, deleteThread } from '../../store/threads';
import catConverter from "../../utils";
import Comment from '../Comment/comment';
import FourOhFour from '../FourOhFour/fourohfour';
import './threadpage.css';

const ThreadPage = () => {
    const history = useHistory();
    const {threadId} = useParams();
    const userId = useSelector(state => state.session.user?.id)
    const dispatch = useDispatch();
    const [editable, setEditable] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [original, setOriginal] = useState('');
    const [errors, setErrors] = useState([]);

    const allThreads = useSelector(state => {return state.threads})
    const selectedThread = Object.values(allThreads).filter(thread => thread.id === parseInt(threadId))[0];

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

    const activeEdit = () => {
        setEditable(true)
        setOriginal(document.querySelector('.thread-content').innerText)
    }

    function trashThread() {
        const deletedThread = dispatch(deleteThread({threadId}))
        // todo - redirect to home (?)
        if (deletedThread) history.push(`/`)
    }

    const saveUpdate = async (e) => {
		e.preventDefault();
		// const pendingComment = document.getElementById(commentId)
		// const updatedCommentBody = pendingComment.innerText;
        const title = document.querySelector(".thread-title").innerHTML
        const description = document.querySelector(".thread-description").innerHTML
        const content = document.querySelector(".thread-content").innerHTML
        // todo - add current vote here
		let data = { threadId, title, description, content }
        if (title && content) {
            dispatch(putThread(data))
            setErrors([]);
        } else {
            setErrors(['Title and content are required'])
        }
		setEditable(false);
	}

    const getTheDay = (date) => {
        const theDate = new Date(date);
        const day = theDate.getDate();
        return day
    }

    const getWeekday = (date) => {
        const theDate = new Date(date);
        const weekday = theDate.getDay();
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        return weekdays[weekday]
    }

    const getTheMonth= (date) => {
        const theDate = new Date(date)
        const month = theDate.getUTCMonth();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months[month]
    }

    const getYear= (date) => {
        date = new Date();
        const year = date.getFullYear();
        return year
    }

    const cancelEdit = (e) => {
        document.querySelector('.thread-content').innerText = original
        setEditable(false);
    }



    if (thisThread.length > 0) {
        return (
            <React.Fragment>
                {thisThread?.map(thread => {
                    return (
                        <li className='thread-main-content' key={thread.id}>
                            <div className='thread-header-section'>
                                <div className='date-info'>
                                    <p  className="threaddate thread-day">{getTheDay(thread.createdAt)}</p>
                                    <p  className="threaddate thread-weekday">{getWeekday(thread.createdAt)}</p>
                                    <div className="thread-date-column3">
                                        <p  className="threaddate thread-month">{getTheMonth(thread.createdAt)},</p>
                                        <p  className="threaddate thread-year"> {getYear(thread.createdAt)}</p>
                                    </div>
                                </div>
                                <h3 className="thread-title" contentEditable={editable} suppressContentEditableWarning={true}>{thread.title}</h3>
                            </div>
                            <div className='thread-info' >
                                <span>Posted by {thread.username} in {catConverter(thread.categoryId)}</span>
                            </div>
                            <p className="thread-description" contentEditable={editable} suppressContentEditableWarning={true}>{thread.description}</p>
                            <p className="thread-content" contentEditable={editable} suppressContentEditableWarning={true}>{thread.content.replace(/\n+/g, `\n\n`)}</p> 
                            {(errors.length > 0) &&
                                <div>
                                    {errors.map((error, ind) => (
                                    <div className="auth-errors" key={`error-${ind}`}>{error}</div>
                                    ))}
                                </div>
                            }
                            <div className='thread-options' hidden={thread.userId !== userId}>
                                <button className="edit-thread" hidden={editable} onClick={activeEdit}>Edit Thread</button>
                                <button className='delete-thread' hidden={editable} onClick={() => setDeletePopUp(true)} >Delete Thread</button>
                                {editable &&
                                    <div>
                                        <form onSubmit={e => saveUpdate(e)}>
                                            <button type="submit">Save</button>
                                            <button onClick={e => cancelEdit(e)}>Cancel</button>
                                        </form>
                                    </div>
                                }
                            </div>
                        </li>
                        
                    )
                })}
                { deletePopUp &&
                <div className="deletepopup">
                    <h2 className='delete-title'>Thread: <span className='delete-thread-title'>{selectedThread?.title}</span></h2>
                    <h3 className='delete-header'>Are you sure you want to delete this thread?</h3>
                    <div className='delete-options'>
                        <button className='option-button confirm-delete' onClick={(e) => trashThread(e)}>DELETE</button>
                        <button className='option-button cancel' onClick={() => setDeletePopUp(false)}>CANCEL</button>
                    </div>
                </div>
                }
               <Comment />
            </React.Fragment>
        )

    } else return (
        <FourOhFour />
    )


 }

 export default ThreadPage;
