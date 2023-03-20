import { Field } from 'react-final-form';

import styles from '../../styles/form.module.css';

const Input = (props: any) => {
	return (
		<div className={styles['form-group']}>
			<Field name={props.name} validate={props.validate}>
				{({ input, meta }) => (
					<>
						<input
							{...input}
							type="text"
							placeholder={props.placeholder}
							id={props.id}
						/>
						{meta.error && meta.touched && (
							<span className={styles['error-span']}>{meta.error}</span>
						)}
					</>
				)}
			</Field>
		</div>
	);
};

export default Input;
