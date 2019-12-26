import * as Types from "./calculator.constants";

export const saveResult = value => ({
	type: Types.SAVE_RESULT_SAGAS,
	payload: { value },
});

export const generateNewCalculation = () => ({
	type: Types.GENERATE_NEW_CALCULATION_SAGAS,
});
