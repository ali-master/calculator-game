/**
 * @module Sagas/Calculator
 * @desc Calculator
 */
import { all, put, takeLatest, select } from "redux-saga/effects";
// Actions
import * as Types from "./calculator.constants";
// Helpers
import {
    generateRandomNumber,
    operators,
    operatorCalculator,
} from "../../helpers";

/**
 * Increment user's score via rate value
 */
export function* saveResult(action) {
    const state = yield select(state => state.calculator);
    if (action.payload.value === state.current.result) {
        const newRate = state.rate + 10;
        const newScore = state.score + newRate;

        yield put({
            type: Types.SAVE_RESULT,
            payload: {
                rate: newRate,
                score: newScore,
            },
        });
    } else {
        yield put({
            type: Types.SAVE_RESULT,
            payload: {
                rate: 0,
            },
        });
    }

    yield put({
        type: Types.GENERATE_NEW_CALCULATION_SAGAS,
    });
}

/**
 * Generate a new calculation object
 */
export function* generateNewCalculation() {
    const operator = yield operators[generateRandomNumber(4)];
    const firstValue = yield generateRandomNumber(9);
    const secondValue = yield generateRandomNumber(9);
    const result = yield Math.floor(
        operatorCalculator[operator](firstValue, secondValue),
    );

    yield put({
        type: Types.GENERATE_NEW_CALCULATION,
        payload: {
            operator,
            firstValue,
            secondValue,
            result,
        },
    });
}

/**
 * Calculator Sagas
 */
export default function* root() {
    yield all([
        takeLatest(Types.SAVE_RESULT_SAGAS, saveResult),
        takeLatest(
            Types.GENERATE_NEW_CALCULATION_SAGAS,
            generateNewCalculation,
        ),
    ]);
}
