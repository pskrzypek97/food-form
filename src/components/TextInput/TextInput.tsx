import { Field } from 'react-final-form';

import { InputProps } from '../../models/inputProps';

import styles from '../../styles/textinput.module.css';

const TextInput = (props: InputProps) => {
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
							className={
								meta.error && meta.touched
									? styles['text-input--error']
									: styles['text-input']
							}
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

export default TextInput;
