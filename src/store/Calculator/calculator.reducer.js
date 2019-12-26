import handlers from "./calculator.business";

export const initialState = {
	score: 0,
	rate: 0,
	current: {
		operator: "*",
		firstValue: 7,
		secondValue: 9,
		result: 63,
	},
};

function reducer(state = initialState, action) {
	try {
		return handlers[action.type](state, action);
	} catch {
		return state;
	}
}

export default reducer;
