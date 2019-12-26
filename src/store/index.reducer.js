import { combineReducers } from "redux";
// Reducers
import calculator from "./Calculator/calculator.reducer";

// Combine all reducers together to control by redux reducers observer.
export default combineReducers({
	calculator,
});
