import type { IRadioInputProps } from "../../types/ui.types";
import styles from "./RadioInput.module.scss";
import { Radio } from 'antd';

const SIZE_CLASSES = {
	xs: "block-xs",
	sm: "block-sm",
	md: "block-md",
	lg: "block-lg",
	xl: "block-xl",
};

export const RadioInput = (props: Partial<IRadioInputProps>) => {
	const sizeClassname = props.size ? SIZE_CLASSES[props.size] : "";

	return (
		<div className={styles["input-wrapper"]}>
			{props.label &&
				<span className={styles["label"]}>
					{props.label}{props.withAsterisk ? <><span className={styles["text-red-500"]}> *</span></> : ""}
				</span>
			}
			{props.description && <span>{props.description}</span>}
			<div className={`${styles["input-container-unstyled"]} ${styles[sizeClassname]} ${props.error ? styles["border-box-red-500"] : ""}`}>
				<Radio.Group name={props.name} options={props.options} defaultValue="male" />
			</div>
			{props.error && <span className={styles["text-red-500"]}>{props.error}</span>}
		</div>
	);
};