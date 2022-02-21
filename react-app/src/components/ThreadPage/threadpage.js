import Cookies from "js-cookie";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getThreads, putThread, deleteThread } from '../../store/threads';
import Comment from '../Comment/comment';
import './threadpage.css';

const ThreadPage = () => {
    const history = useHistory();
    const {threadId} = useParams();
    const userId = useSelector(state => state.session.user?.id)
    const dispatch = useDispatch();
    const [editable, setEditable] = useState(false);
    const [deletePopUp, setDeletePopUp] = useState(false);

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
        console.log(title, description, content, 'is this the user interface text')
        // todo - add current vote here
		let data = { threadId, title, description, content }
		dispatch(putThread(data))
		setEditable(false)
	}



    return (
        <React.Fragment>
            {thisThread.map(thread => {
                return (
                    <li key={thread.id}>
                        <h3 className="thread-title" contentEditable={editable} suppressContentEditableWarning={true}>{thread.title}</h3>
                        <p  className="thread-updated-at">{thread.updated_at}</p>
                        <p className="thread-description" contentEditable={editable} suppressContentEditableWarning={true}>{thread.description}</p>
                        <p className="thread-content" contentEditable={editable} suppressContentEditableWarning={true}>{thread.content}</p>
                        <div className='thread-options' hidden={thread.userId !== userId}>
                            <button className="edit-thread" hidden={editable} onClick={activeEdit}>Edit Thread</button>
							<button className='delete-thread' onClick={() => setDeletePopUp(true)} >Delete Thread</button>
                        </div>
                    </li>
                    
                )
            })}
            {editable &&
                <div>
                    <form onSubmit={e => saveUpdate(e)}>
                        <button type="submit">Save</button>
                    </form>
                </div>
            }
            { deletePopUp &&
            <div className="deletepopup">
                <h2 className='delete-title'>Thread: {selectedThread?.title}</h2>
                <h3 className='delete-header'>Are you sure you want to delete this project?</h3>
                <div className='delete-options'>
                    <button className='option-button confirm-delete' onClick={(e) => trashThread(e)}>DELETE</button>
                    <button className='option-button cancel' onClick={() => setDeletePopUp(false)}>CANCEL</button>
                </div>
            </div>
            }
           <Comment />
        </React.Fragment>
    )

 }

 export default ThreadPage;
