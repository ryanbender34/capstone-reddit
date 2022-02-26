import { Link } from 'react-router-dom';
import React, { useState} from 'react';
import catConverter from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import './threadcard.css';
import { postLike, putLike } from '../../store/threads';

const ThreadCard = ({ thread }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session?.user)
    const threads = useSelector(state => state.threads)
    let commentsArr = []
    console.log(thread.comments, 'hmm', typeof thread.comments)
    // console.log(Object.values(thread.comments), 'here are the values')
    for (const key in thread.comments) {
        console.log(thread.comments[key], 'key value here')
        if (thread.comments[key].reply === null) {
            commentsArr.push(thread.comments[key])
        }
    }
	const userId = user?.id
    const [vote, setVote] = useState(0)
    // const dateConverter = (comment) => {
	// 	const currentDate = new Date();
	// 	const commentDate = Date.parse(comment)
	// 	let seconds = ((currentDate - (commentDate + 21599000)) / 1000)

	// 	var d = Math.floor(seconds / (3600 * 24));
	// 	var h = Math.floor(seconds % (3600 * 24) / 3600);
	// 	var m = Math.floor(seconds % 3600 / 60);
	// 	var s = Math.floor(seconds % 60);

	// 	var dDisplay = d > 0 ? d + (d === 1 ? " day " : " days ") : "";
	// 	var hDisplay = ((h > 0) && (d === 0)) ? h + (h === 1 ? " hour " : " hours ") : "";
	// 	var mDisplay = ((m > 0) && (h === 0)) ? m + (m === 1 ? " minute " : " minutes ") : "";
	// 	var sDisplay = ((s > 0) && ((m === 0))) ? s + (s === 1 ? " second" : " seconds") : "";
	// 	return dDisplay + hDisplay + mDisplay + sDisplay;
	// }

  

    // const upVote = async (threadId) => {
    //     let vote = 1
    //     let thread = threads[threadId]
        
    //     thread.votes?.forEach(vote => {
    //             if (vote.userId === userId) {
    //                 return dispatch(putLike({userId, threadId, vote}))
    //                 } 
    //             })
                
    //     dispatch(postLike({userId, threadId, vote}))
    // }

    // const downVote = async (threadId) => {
    //     let vote = -1
    //     await dispatch(postLike({userId, threadId, vote}))
    // }

// {dateConverter(thread.updatedAt)}

	return (
        <>
            <div className="thread-row" >
                <div className="column-holder">
                    <div className='thread-column-1'>
                        {/* todo - make upvote/downvote icons */}
                        {/* <i class="icon icon-upvote _2Jxk822qXs4DaXwsN7yyHA"></i> */}
                        {/* <div className="vote-container">
                            <div className="increment up" onClick={user ? () => upVote(thread.id) : null}>&#8593;</div>
                            <div className='vote-counter'>{thread.votes.length}</div>
                            <div className="increment down" onClick={user ? () => downVote(thread.id) : null}>&#8595;</div>
                        </div> */}
                    </div>
                    <Link className='thread-column-2' to={`/threads/${thread.id}`}>
                        <div className='thread-topline'>
                            <p className='thread-category'>s/{catConverter(thread.categoryId)}</p>
                            <p className='thread-postedby'>Posted by {thread.username}</p>
                        </div>
                        <h3 className='thread-header-text'> {thread.title}</h3>
                        <div className='thread-bottomline'>
                            <p className='BL-text BL-comments'>{commentsArr.length} comments</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
	)
}

export default ThreadCard