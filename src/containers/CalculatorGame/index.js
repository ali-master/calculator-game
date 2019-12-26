import * as React from "react";
import Question from "../../components/Question";
import ScroreAndRate from "../../components/ScroreAndRate";
import QuestionInput from "../../components/QuestionInput";
import { useDispatch } from "react-redux";
import { generateNewCalculation } from "../../store/Calculator/calculator.actions";

export const CalculatorGame = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(generateNewCalculation());
	}, [dispatch]);

	return (
		<div>
			<div className="question">
				<Question />
				<QuestionInput />
				<ScroreAndRate />
			</div>
		</div>
	);
};
