import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { saveResult } from "../../store/Calculator/calculator.actions";

const QuestionInput = () => {
	const inputRef = useRef(null);
	const dispatch = useDispatch();

	function handleInputValue(event) {
		const { value } = event.currentTarget;

		if (value) {
			dispatch(saveResult(Number(value)));
			inputRef.current.value = "";
			inputRef.current.focus();
		}
	}

	return <input ref={inputRef} onBlur={handleInputValue} />;
};

export default QuestionInput;
