import * as React from "react";
import AnimateOnChange from "react-animate-on-change";
import { useSelector } from "react-redux";
// Utilites
import cs from "classnames";
// Styles
import styles from "./index.module.scss";

const ScroreAndRate = () => {
	const state = useSelector(state => state.calculator);

	return (
		<div className={styles["score-wrapper"]}>
			<AnimateOnChange
				baseClassName={cs(styles["score"], { [styles["score--zero"]]: state.score === 0 })}
				animationClassName={styles["score__bounce"]}
				animate={state.rate !== 0}
			>
				Score: {state.score}
			</AnimateOnChange>
			<AnimateOnChange
				baseClassName={cs(styles["rate"], "animated")}
				animationClassName="heartBeat"
				animate={state.rate !== 0}
			>
				{state.rate === 0 ? "" : "+"}
				{state.rate}
			</AnimateOnChange>
		</div>
	);
};

export default ScroreAndRate;
