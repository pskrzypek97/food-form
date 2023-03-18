import Dropdown from '../Dropdown/Dropdown';

import styles from '../../styles/form.module.css';

const Form = () => {
	return (
		<form action="#" className={styles.form}>
			<div className={styles['form-group']}>
				<input
					type="text"
					id="name"
					name="name"
					className={styles['input-error']}
				/>
				<label htmlFor="name" className={styles['form-label']}>
					Name
				</label>
				<span className={styles['error-span']}>
					djioaidaidjiajdiajdpajdpajdjadjpa
				</span>
			</div>
			<div className={styles['form-group']}>
				<input type="text" id="preparation-time" name="preparation-time" />
				<label htmlFor="preparation-time" className={styles['form-label']}>
					Preparation Time
				</label>
			</div>

			<div className={styles['form-group']}>
				<Dropdown />
			</div>

			<div className={styles['form-group']}>
				<input type="number" id="no_of_slices" name="no_of_slices" />
				<label htmlFor="no_of_slices" className={styles['form-label']}>
					Number of slices
				</label>
			</div>

			<div className={styles['form-group']}>
				<input type="number" id="diameter" name="diameter" />
				<label htmlFor="diameter" className={styles['form-label']}>
					Diameter
				</label>
			</div>

			<button type="submit" className={styles['form__button']}>
				Submit
			</button>
		</form>
	);
};

export default Form;
