import styles from '../../styles/buttons.module.css';

const Buttons = ({ reset }: { reset: () => void }) => {
	return (
		<div className={styles['buttons-container']}>
			<button type="submit" className={styles['form__button']}>
				Submit
			</button>
			<button
				type="button"
				className={styles['form__button--reset']}
				onClick={reset}
			>
				Reset
			</button>
		</div>
	);
};

export default Buttons;
