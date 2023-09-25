export const INITIAL_STATE = {
	post: {},
	loading: false,
	error: false,
}

export const blogReducer = (state, action) => {
	switch (action.type) {
		case "FETCH_START":
			return {
				post: {},
				loading: true,
				error: false,
			}
		case "FETCH_SUCCESS":
			return {
				...state,
				loading: false,
				post: action.payload,
			}
		case "FETCH_ERROR":
			return {
				error: true,
				loading: false,
				post: {},
			}
	}
}
