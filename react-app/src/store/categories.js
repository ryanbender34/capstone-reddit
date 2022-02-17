import { csrfFetch } from "../helpers";
import catConverter from '../utils';

const LOAD_CATEGORIES = "categories/LOAD_CATEGORIES";
const SET_CATEGORY = "categories/SET_CATEGORY";

const loadCategories = (categories) => ({
	type: LOAD_CATEGORIES,
	categories
})

const setCategory = (category) => ({
    type: SET_CATEGORY,
    category
})

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

export const selectCategory = function (name) {
    const categoryId = catConverter(name);
	return async (dispatch) => {
		const response = await csrfFetch(`/api/categories/${categoryId}`);

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
		default:
			return stateDotCategories;
	}
}