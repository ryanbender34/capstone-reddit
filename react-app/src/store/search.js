import { csrfFetch } from "../helpers";

const LOAD_SEARCH_THREADS = "search/LOAD_SEARCH_THREADS";

const loadSearchThreads = (threads) => ({
	type: LOAD_SEARCH_THREADS,
	threads
})

export const getSearchThreads = function (query) {
	return async (dispatch) => {
		const response = await csrfFetch(`/api/search/${query}`);

		if (response.ok) {
			const threads = await response.json();
			dispatch(loadSearchThreads(threads));
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

export default function reducer(stateDotSearch = {}, action) {
    switch(action.type) {
        case LOAD_SEARCH_THREADS:
            let cleanState = {}
            action.threads.forEach(thread => {
                cleanState[thread.id] = thread;
            });
            return cleanState;
        default:
            return stateDotSearch;
    }
}