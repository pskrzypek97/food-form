import { Field } from 'react-final-form';

// import Dropdown from '../Dropdown/Dropdown';

import styles from '../../styles/form.module.css';

const Input = (props: any) => {
	return (
		<div className={styles['form-group']}>
			<Field
				name={props.name}
				validate={(value) => (value ? undefined : 'Required')}
			>
				{({ input, meta }) => (
					<>
						<input
							{...input}
							type={props.type}
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
