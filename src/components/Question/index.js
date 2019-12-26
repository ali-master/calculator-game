import React from "react";
import { useSelector } from "react-redux";

import styles from "./index.module.scss";

const Question = () => {
	const calculator = useSelector(state => state.calculator.current);

	return (
		<div className={styles.question}>
			<span className={styles["question__numbers"]}>{calculator.firstValue}</span>
			<span className={styles["question__operator"]}>{calculator.operator}</span>
			<span className={styles["question__numbers"]}>{calculator.secondValue}</span>
		</div>
	);
};

export default Question;
