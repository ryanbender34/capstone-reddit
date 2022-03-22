import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import catConverter from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import './threadcard.css';
import { postLike, putLike } from '../../store/threads';

const ThreadCard = ({ thread }) => {
    const dispatch = useDispatch();
    // const {categoryId} = useParams();
    const user = useSelector((state) => state.session?.user);
    // todo - improve this? 
    let voteCount = 0;
    let id = thread.id;
    let commentsArr = []
    for (const key in thread.comments) {
        if (thread.comments[key].reply === null) {
            commentsArr.push(thread.comments[key])
        }
    }
	const userId = user?.id
    // // todo - should this useState? 
    let userVote = null;
    let voteId = null;
    let voteIndex = null;
    // let threadIndex = null;
    // const catThreads = useSelector(state => state.categories.active?.threads)
    // catThreads?.forEach((aThread, i) => {
    //     if (aThread.id === thread.id) {
    //         threadIndex = i;
    //     }
    // })
    thread.votes?.forEach((vote, i) => {
        voteCount += vote.value;
        if (vote.userId === userId) {
            voteId = vote.id;
            voteIndex = i;
            userVote = vote.value
            } 
        })

        useEffect(() => {
            let userUpvote = document.querySelector(`.up-${id}`);  
            let userDownvote = document.querySelector(`.down-${id}`);
            console.log(userVote, id, 'the vote and the ID')

            if (userVote === 1) {
                userUpvote.style.color = 'green';
                userDownvote.style.color = 'black';
            } else if (userVote === 0) {
                let clearUp = document.querySelector(`.up-${id}`);
                clearUp.style.color = 'black';
                let clearDown = document.querySelector(`.down-${id}`);
                clearDown.style.color = 'black';
            } else if (userVote === -1) {
                userDownvote.style.color = 'red';
                userUpvote.style.color = 'black'
            }
        }, [userVote])


        const dateConverter = (date) => {
            // date comes in GMT 
            // todo - is it necessary to convert to UTC string now
            const currentDate = new Date();
            const currentDateToGMT = currentDate.toUTCString();
            const parsedCurrent = Date.parse(currentDateToGMT);
            const parsedInput = Date.parse(date);
            const difference = parsedCurrent - parsedInput
    
            let seconds = ((difference) / 1000)
    
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            // var s = Math.floor(seconds % 60);
    
            var dDisplay = d > 0 ? d + (d === 1 ? " day " : " days ") : "";
            var hDisplay = ((h > 0) && (d === 0)) ? h + (h === 1 ? " hour " : " hours ") : "";
            var mDisplay = ((m > 0) && (h === 0)) ? m + (m === 1 ? " minute " : " minutes ") : "";
            var sDisplay = (((m === 0) && (h === 0) && (d === 0))) ?  "seconds" : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }

    const postVote = async (threadId, value) => {
        // console.log(userId, threadId, value, 'testing inputs FE')
        // todo - this dispatch makes the inner returned thunk get called with the right agruments. first you dispatch the thunk action creator and then you dispatch the action. 
        // if the thunk action creator returns a function, then you must manually call dispatch. The whole point of redux-thunk is to control the dispatches manually. 
        dispatch(postLike({userId, threadId, value}));
    }

    const updateVote = async (threadId, value) => {
        // console.log(userId, threadId, value, voteId, voteIndex, 'checking FE PUT inputs')
         dispatch(putLike({userId, threadId, value, voteId, voteIndex}));
    }

    // todo delete all code related to deleting votes from the db
    // const removeVote = async (threadId) => {
    //     dispatch(deleteVote({userId, threadId, voteId, voteIndex}))
    // }

	return (
        <>
            <div className="thread-row" >
                <div className="column-holder">
                    <div className='thread-column-1'>
                        {/* todo - make upvote/downvote icons */}
                        {/* <i class="icon icon-upvote _2Jxk822qXs4DaXwsN7yyHA"></i> */}
                        <div className="vote-container">
                            <div className={`vote-btn up up-${thread.id}`} value={1} onClick={(user && (userVote === null)) ? () => postVote(thread.id, 1) : (user && (userVote < 1)) ? () => updateVote(thread.id, 1) : (user && (userVote === 1)) ? () => updateVote(thread.id, 0) : null}>&#8593;</div>
                            <div className='vote-counter'>{voteCount}</div>
                            <div className={`vote-btn down down-${thread.id}`} value={-1} onClick={(user && (userVote === null)) ? () => postVote(thread.id, -1) : (user && (userVote > -1)) ? () => updateVote(thread.id, -1) : (user && (userVote === -1)) ? () => updateVote(thread.id, 0) : null}>&#8595;</div>
                        </div>
                    </div>
                    <Link className='thread-column-2' to={`/threads/${thread.id}`}>
                        <div className='thread-topline'>
                            <p className='thread-category'>s/{catConverter(thread.categoryId)}</p>
                            <p className='thread-postedby'>Posted by {thread.username} {dateConverter(thread.updatedAt)} ago</p>
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