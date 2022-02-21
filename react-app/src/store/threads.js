import { csrfFetch } from "../helpers";

const LOAD_THREADS = "threads/LOAD_THREADS";
const CREATE_THREAD = "threads/CREATE_THREAD";
const EDIT_THREAD = "threads/EDIT_THREAD";
const TRASH_THREAD = "threads/TRASH_THREAD";

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

export const postThread = function ({ userId, title, description, categoryId, content }) {
	return async (dispatch) => {
        console.log(userId, title, description, categoryId, content,  'data going to backend')
		const response = await csrfFetch("/api/threads/", {
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
				return data.errors;
			}
		} else {
			return ['An error occured. Please try again.'];
		}
	}
}

export const putThread = function ({ threadId, title, description, categoryId, threadImageURL }) {
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
				category_id: categoryId,
				thread_image: threadImageURL
			})
		})

		if (response.ok) {
			const thread = await response.json();
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
		default:
			return stateDotThreads;
	}
}