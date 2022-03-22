import { csrfFetch } from "../helpers";

const LOAD_CATEGORIES = "categories/LOAD_CATEGORIES";
const SET_CATEGORY = "categories/SET_CATEGORY";
// const LIKE_FROM_CAT = "categories/LIKE_FROM_CAT";

const loadCategories = (categories) => ({
	type: LOAD_CATEGORIES,
	categories
})

const setCategory = (category) => ({
    type: SET_CATEGORY,
    category
})

// const likeFromCat = (vote) => ({
// 	type: LIKE_FROM_CAT,
// 	vote
// })

export const getCategories = function () {
	return async (dispatch) => {
		const response = await csrfFetch("/api/categories/");

		if (response.ok) {
			const categories = await response.json();
			dispatch(loadCategories(categories));
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

export const selectCategory = function (id) {
	return async (dispatch) => {
		const response = await csrfFetch(`/api/categories/${id}`);

		if (response.ok) {
			const currentCat = await response.json();
			dispatch(setCategory(currentCat));
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

// export const catPostLike = function ({userId, threadId, value}) {
// 	return async (dispatch) => {
// 		const response = await csrfFetch("/api/categories/", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify({
// 				user_id: userId,
// 				thread_id: threadId,
// 				value
// 			})
// 		})

// 		if (response.ok) {
// 			const vote = await response.json();
// 			dispatch(likeFromCat(vote))
// 		}
// 	}
// }

// export const catPutLike = function ({userId, threadId, value, voteId, voteIndex = null, threadIndex = null}) {
// 	return async (dispatch) => {
// 		const response = await csrfFetch(`/api/categories/`, {
// 			method: "PUT",
// 			headers: {
// 				"Content-Type": "application/json"
// 			},
// 			body: JSON.stringify({
// 				user_id: userId,
// 				thread_id: threadId,
// 				value,
// 				id: voteId
// 			})
// 		})

// 		if (response.ok) {
// 			// todo - this is an object
// 			const vote = await response.json();
// 			vote.threadIndex = threadIndex;
// 			vote.voteIndex = voteIndex;
// 			dispatch(likeFromCat(vote))
// 		} else return ['No']
// 	}
// }

export default function reducer(stateDotCategories = {}, action) {
	let updatedState = { ...stateDotCategories };
	switch (action.type) {
		case LOAD_CATEGORIES:
			action.categories.forEach(category => {
				updatedState[category.id] = category;
			})
			return updatedState;
        case SET_CATEGORY:
            updatedState['active'] = action.category
            return updatedState;
		// case LIKE_FROM_CAT:
		// 	// const threadId = action.vote.threadId;
		// 	console.log(action.vote, 'what do we have in state')
		// 	const threadIndex = action.vote.threadIndex;
		// 	const voteIndex = action.vote.voteIndex;
		// 	const length = updatedState['active'].threads[threadIndex].votes?.length;
		// 	(voteIndex === undefined) ? updatedState['active'].threads[threadIndex].votes[length] = action.vote : updatedState[threadIndex].votes[voteIndex] = action.vote
		// 	return updatedState;

		default:
			return stateDotCategories;
	}
}