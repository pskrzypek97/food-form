import styles from '../../styles/form.module.css';

const Form = () => {
	return (
		<form action="#" className={styles.form}>
			<div className={styles['form-group']}>
				<input type="text" id="name" name="name" />
				<label htmlFor="name" className={styles['form-label']}>
					Name
				</label>
			</div>
			<div className={styles['form-group']}>
				<input type="text" id="preparation-time" name="preparation-time" />
				<label htmlFor="preparation-time" className={styles['form-label']}>
					Preparation Time
				</label>
			</div>
		</form>
	);
};

export default Form;
