import { csrfFetch } from "../helpers";

const LOAD_THREADS = "threads/LOAD_THREADS";
const CREATE_THREAD = "threads/CREATE_THREAD";
const EDIT_THREAD = "threads/EDIT_THREAD";
const TRASH_THREAD = "threads/TRASH_THREAD";
const LIKE_THREAD = 'threads/LIKE_THREAD';
// const TRASH_VOTE = 'threads/TRASH_VOTE';

const loadThreads = (threads) => ({
	type: LOAD_THREADS,
	threads
})

const createThread = (thread) => ({
	type: CREATE_THREAD,
	thread
})

const editThread = (thread) => ({
	type: EDIT_THREAD,
	thread
})

const trashThread = (threadId) => ({
	type: TRASH_THREAD,
	threadId
})

const likeThread = (vote) => ({
	type: LIKE_THREAD,
	vote
})

// const trashVote = (index) => ({
// 	type: TRASH_VOTE,
// 	index
// })


export const getThreads = function () {
	return async (dispatch) => {
		const response = await csrfFetch("/api/threads/");
		
		if (response.ok) {
			const threads = await response.json();
			dispatch(loadThreads(threads));
		} else if (response.status < 500) {
			const data = await response.json();
			if (data.errors) {
				return data.errors;
			}
		} else {
			return ['An error occurred. Please try again.'];
		}
	}
}

export const postLike = function ({userId, threadId, value}) {
	return async (dispatch) => {
		const response = await csrfFetch("/api/votes/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: userId,
				thread_id: threadId,
				value
			}),
		})

		if (response.ok) {
			const vote = await response.json();
			dispatch(likeThread(vote))
		} else return ['No']
	}
}

export const putLike = function ({userId, threadId, value, voteId, voteIndex = null}) {
	return async (dispatch) => {
		const response = await csrfFetch(`/api/votes/`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: userId,
				thread_id: threadId,
				value,
				id: voteId
			})
		})

		if (response.ok) {
			// todo - this is an object
			const vote = await response.json();
			vote.voteIndex = voteIndex;
			dispatch(likeThread(vote))
		} else return ['No']
	}
}

// export const deleteVote= function ({ voteId, voteIndex }) {
// 	return async (dispatch) => {
// 		const response = await csrfFetch("/api/votes/", {
// 			method: "DELETE",
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify({ id: voteId })
// 		})

// 		if (response.ok) {
// 			dispatch(trashVote(voteIndex));
// 			return true;
// 		} else if (response.status < 500) {
// 			const data = await response.json();
// 			if (data.errors) {
// 				return data.errors;
// 			}
// 		} else {
// 			return ['An error occured. Please try again.'];
// 		}
// 	}
// }

export const postThread = function ({ userId, title, description, categoryId, content }) {
	return async (dispatch) => {
		const response = await fetch("/api/threads/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				user_id: userId,
				title,
				description,
				category_id: categoryId,
                content
			})
		})
		if (response.ok) {
			const thread = await response.json();
			dispatch(createThread(thread));
			return thread;
		} else if (response.status < 500) {
			const data = await response.json();
			if (data.errors) {
				return data;
			}
		} else {
			return ['An error occured. Please try again.'];
		}
	}
}

export const putThread = function ({ threadId, title, description, content }) {
	return async (dispatch) => {
		const response = await csrfFetch("/api/threads/", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id: threadId,
				title,
				description,
				content
			})
		})

		if (response.ok) {
			const thread = await response.json();
			// todo - this propagates the action to the reducer
			dispatch(editThread(thread));
			return thread;
		} else if (response.status < 500) {
			const data = await response.json();
			if (data.errors) {
				return data.errors;
			}
		} else {
			return ['An error occured. Please try again.'];
		}
	}
}

export const deleteThread= function ({ threadId }) {
	return async (dispatch) => {
		const response = await csrfFetch("/api/threads/", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ id: threadId })
		})

		if (response.ok) {
			dispatch(trashThread(threadId));
			return true;
		} else if (response.status < 500) {
			const data = await response.json();
			if (data.errors) {
				return data.errors;
			}
		} else {
			return ['An error occured. Please try again.'];
		}
	}
}

export default function reducer(stateDotThreads = {}, action) {
	let updatedState = { ...stateDotThreads };
	switch (action.type) {
		case LOAD_THREADS:
			action.threads.forEach(thread => {
				updatedState[thread.id] = thread;
			})
			return updatedState;
		case CREATE_THREAD:
		case EDIT_THREAD:
			updatedState[action.thread.id] = action.thread;
			return updatedState;
		case TRASH_THREAD:
			delete updatedState[action.threadId];
			return updatedState;
		case LIKE_THREAD:
			const threadId = action.vote.threadId;
			const voteIndex = action.vote.voteIndex;
			const length = updatedState[threadId].votes.length;
			delete action.vote['voteIndex'];
			// voteIndex will be undefined only when we are posting
			(voteIndex === undefined) ? updatedState[threadId].votes[length] = action.vote : updatedState[threadId].votes[voteIndex] = action.vote
			return updatedState
		// case TRASH_VOTE:
		// 	delete updatedState[threadId].votes[index]
		default:
			return stateDotThreads;
	}
}