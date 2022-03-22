import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getComments, postComment, putComment, deleteComment } from '../../store/comments';
import './comment.css';

const Comment = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.session?.user)
	const userId = user?.id
	let { threadId } = useParams();
	threadId = parseInt(threadId, 10)
	const [showCommentForm, setShowCommentForm] = useState(false);
	const [showReplyForm, setShowReplyForm] = useState(false);
	const [reply, setReply] = useState(null);
	const [replyValue, setReplyValue] = useState(null);
	const [editable, setEditable] = useState(false);
	const [comment, setComment] = useState('');
	const [errors, setErrors] = useState([]); 
	let commentObject = useSelector(state => state.comments)
	let commentArr = Object.values(commentObject)
	let onlyCommentArr = [];
	let onlyReplyArr = [];
	commentArr.forEach(c => {
		if ((c.reply === null) && (c.threadId === threadId)) {
			onlyCommentArr.push(c)
		} else if (c.threadId === threadId) {
			onlyReplyArr.push(c)
		}
	})


	useEffect(() => {
		dispatch(getComments({ threadId }))
	}, [dispatch, threadId])

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

	const handleCancelClick = (e) => {
		e.preventDefault();
		setShowCommentForm(false);
		setShowReplyForm(false);
		setErrors([])
		setComment('')
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setShowCommentForm(false);
		let authorId = userId;
		let reply = null;
		let content = comment;
        // just remove vote b/c there is adefault value set? 
        let vote = 0;
		let newComment = { authorId, threadId, reply, content, vote }
		
		await dispatch(postComment(newComment))
		.catch(async (res) => {
			const data = await res.json()
			if (data && data.errors) {
				setErrors(data.errors)
				setShowCommentForm(true)
				// todo - how do I get the comment to reset after I successfully post a comment
			} else setComment('')
		})
		setComment('')
	}
	

	const handleReplySubmit = async (e) => {
		e.preventDefault()
		let authorId = userId;
		let content = comment;
        let vote = 0;
		let data = { authorId, threadId, reply, content, vote }
		let newReply = dispatch(postComment(data))
		if (newReply) {
			setShowReplyForm(false);
			setComment('')
		}
	}

	const saveUpdate = async (e, commentId) => {
		e.preventDefault();
		const pendingComment = document.getElementById(commentId)
		const updatedCommentBody = pendingComment.innerText;
		let authorId = userId;
		let content = updatedCommentBody;
		let reply = null;
        // todo - add current vote here
        let vote = 0
		let data = { commentId, authorId, threadId, reply, content, vote }
		if (content) {
			dispatch(putComment(data))
			document.querySelector(`.comment-body-${commentId}`).contentEditable = false;
			document.querySelector(`.com-error-${commentId}`)?.remove()
			setEditable(false)
		} else {
			let commentError = document.createElement('p');
			commentError.setAttribute('class', `com-error-${commentId}`);
			commentError.innerText = 'Comment must contain text';
			commentError.style.color = 'red';
			let comContainer = document.querySelector(`.comment-parent-${commentId}`);
			comContainer.prepend(commentError);
		}
	}

	const saveReplyUpdate = (e, id, cId) => {
		e.preventDefault();
		const pendingReply = document.getElementById(id)
		const updatedReplyBody = pendingReply.innerText;
		let authorId = userId;
		let commentId = id;
		let content = updatedReplyBody;
		let reply = cId;
        let vote = 0;
		let data = { commentId, authorId, threadId, reply, content, vote }
		if (content) {
			dispatch(putComment(data))
			document.querySelector(`.reply-body-${id}`).contenteditable = false
			document.querySelector(`.reply-error-${id}`)?.remove()
			setEditable(false)
		} else {
			let replyError = document.createElement('p');
			replyError.setAttribute('class', `reply-error-${id}`);
			replyError.innerText = 'Reply must contain text';
			replyError.style.color = 'red';
			let replyContainer = document.querySelector(`.reply-parent-${id}`);
			replyContainer.prepend(replyError);
		}
	}


	const cancelUpdate = (e, id) => {
		const body = document.querySelector(`.comment-body-${id}`)
		body.innerHTML = comment;
		setEditable(false);
		// document.querySelector(`.reply-btn-${id}`)?.setAttribute('hidden', false)
		document.querySelectorAll(`.com-error-${id}`)?.forEach(ele => {
			ele.remove()
		})
	}

	const cancelReplyUpdate = (e, id) => {
		const body = document.querySelector(`.reply-body-${id}`)
		body.innerHTML = comment;
		setEditable(false);
		document.querySelectorAll(`.reply-error-${id}`)?.forEach(ele => {
			ele.remove()
		})
	}

	const activeEdit = (e, id) => {
		setEditable(id)
		let commentBody = document.querySelector(`.comment-body-${id}`)
		commentBody.contentEditable = true;
		// document.querySelector(`.reply-btn-${id}`)?.setAttribute('hidden', true)
		setComment(commentBody.innerText)
	}

	const activeReply = (e, id) => {
		if (user) {
			setReplyValue(id);
			setShowReplyForm(true);
		} 
	}

	const activeEditReply = (e, id) => {
		setEditable(id)
		let replyBody = document.querySelector(`.reply-body-${id}`)
		replyBody.contentEditable = true;
		setComment(replyBody.innerHTML);
	}

	const removeComment = (commentId) => {
		dispatch(deleteComment({ commentId }));
		setEditable(false);
	}

	return (
		<section className="add-comment">
			<h1 className='comment-header'>Leave a comment...</h1>
			<button onClick={user ? () => setShowCommentForm(true) : () => setErrors([`Please login to leave a comment`])}>Create a Comment</button>
			<br />
			<div className="errors-container">
				{(errors.length > 0) && errors?.map((err, i) => {
					return <p key={i} className='anerror' >{err}</p>
				})}
			</div>
			{showCommentForm &&
				<>
					<form className='new-comment-container' onSubmit={handleSubmit}>
						<input type="text" className='create-comment-input' value={comment} placeholder="add your comment..." onChange={(e) => setComment(e.target.value)} required></input>
						<div className='comment-container-buttons'>
							<button className='submit-comment-button' type="submit">Post Comment</button>
							<button className='discard-comment-button' type="button" onClick={handleCancelClick}>Nevermind</button>
						</div>
					</form>
				</>
			}
			<br />
			<div className="comment-container">
				<div className="comment-count">Comments: {onlyCommentArr?.length}</div>
				{onlyCommentArr?.slice(0).reverse().map((comment, i) => {
					return (
						<div key={i}>
							<hr key={`hrkey-${comment.id}`} />
							<li key={`container-for-${comment.id}`} className={`comment-parent comment-parent-${comment.id}`}>
								<div className={`comment-list comment-${comment.id}`} key={comment.id}>
									<div className="comments-text">
										<p className="comment-username">{comment.username} <span className="updated-tag">updated {dateConverter(comment.updatedAt)} ago</span></p>
										{/* <p className="comment-username">{comment.username}</p> */}
										<p className={`comment-body comment-body-${comment.id}`} id={comment.id} suppressContentEditableWarning={true} onChange={(e) => setComment(e.target.value)}>{comment.content}</p>
									</div>
									<div className="comments-btns">
										<button className={`comment-btn reply-btn-${comment.id}`} value={comment.id} onClick={(e) => activeReply(e, comment.id)}>Reply</button>
										<button className="comment-btn" hidden={(!(userId === comment.authorId) || (editable))} onClick={(e) => activeEdit(e, comment.id)}>Edit</button>
										<button className="comment-btn" hidden={(!(userId === comment.authorId) || editable)} onClick={() => removeComment(comment.id)}>Delete</button>
									</div>
									{(showReplyForm && (comment.id === replyValue)) ?
										<div className="reply-form">
											<form className='new-comment-container' onSubmit={handleReplySubmit}>
												<input type="text" placeholder="add your reply..." onChange={(e) => setComment(e.target.value)} required></input>
												<div className='comment-container-buttons'>
													<button className='submit-comment-button'type="submit" onClick={() => setReply(comment.id)}>Reply to {comment.username}</button>
													<button className='discard-comment-button'type="button" onClick={handleCancelClick}>Nevermind</button>
												</div>
											</form>
										</div> : null
									}
									{(editable === comment.id) &&
										<div hidden={(!(userId === comment.authorId))}>
											<form id={`comment-edit-form-${comment.id}`} onSubmit={e => saveUpdate(e, comment.id)}>
												<button type="submit">Save</button>
												<button type="button" onClick={e => cancelUpdate(e, comment.id)}>Cancel</button>
											</form>
										</div>
									}
								</div>
							</li>
							{(onlyCommentArr.length === (i + 1)) ? <hr className="botttom-hr" key="key" /> : null}
							{onlyReplyArr?.slice(0).reverse().map(reply => {
								if (reply.reply === comment.id) {
									return (
										<React.Fragment key={reply.id}>
											<li key={`container-for-${reply.id}`} className={`reply-parent reply-parent-${reply.id}`}>
												<div className={`reply-list reply-${reply.id}`} key={reply.id}>
													<div className="reply-text">
														<p className="reply-username">{reply.username} <span className="updated-tag">updated {dateConverter(reply.updatedAt)} ago</span></p>
														<p className={`reply-body reply-body-${reply.id}`} id={reply.id} contentEditable='false' suppressContentEditableWarning={true} onChange={(e) => setComment(e.target.value)}>{reply.content}</p>
													</div>
													<div className="reply-btns">
														<button className="reply-btn" hidden={(!(userId === reply.authorId) || (editable))} onClick={(e) => activeEditReply(e, reply.id)}>Edit</button>
														<button className="reply-btn" hidden={(!(userId === reply.authorId) || (editable))} onClick={() => removeComment(reply.id)}>Delete</button>
													</div>
													{(editable === reply.id) &&
														<div key={`editbtns-${reply.id}`} hidden={(!(userId === reply.authorId))}>
															<form id={reply.id} className="reply-btns" onSubmit={e => saveReplyUpdate(e, reply.id, reply.reply)}>
																<button type="submit">Save</button>
																<button type="button" onClick={e => cancelReplyUpdate(e, reply.id)}>Cancel</button>
															</form>
														</div>
													}
												</div>
											</li>
										</React.Fragment>
									)
								} else {
									return (<React.Fragment key={`nothing-${reply.id}`}></React.Fragment>)
								}
							})}
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default Comment;