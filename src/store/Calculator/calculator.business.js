import * as Types from "./calculator.constants";
import { initialState } from "./calculator.reducer";

const handlers = {
	[Types.SAVE_RESULT]: (state, { payload }) => ({ ...state, ...payload }),
	[Types.GENERATE_NEW_CALCULATION]: (state, { payload }) => ({ ...state, current: payload }),
	[Types.RESET]: (state, payload) => initialState,
};

export default handlers;
