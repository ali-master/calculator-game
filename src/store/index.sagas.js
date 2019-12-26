import { all, fork } from "redux-saga/effects";
// Sagas entities
import CalculatorSagas from "./Calculator/calculator.sagas";

/**
 * rootSaga
 * In this case, we need to merge all redux-saga sagas together to observe all dispatched actions.
 */
export default function* root() {
	yield all([fork(CalculatorSagas)]);
}
