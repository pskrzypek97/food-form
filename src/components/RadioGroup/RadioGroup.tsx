import { Field } from 'react-final-form';

import styles from '../../styles/radiogroup.module.css';

const RadioGroup = ({ onDish }: { onDish: (arg0: string) => void }) => {
	const radios = [
		{
			id: 'pizza',
			label: 'Pizza',
		},
		{
			id: 'soup',
			label: 'Soup',
		},
		{
			id: 'sandwich',
			label: 'Sandwich',
		},
	];

	return (
		<div className={styles['radio-group']}>
			{radios.map((radio) => (
				<div className={styles['radio-container']} key={radio.id}>
					<Field
						type="radio"
						className={styles['radio-button']}
						id={radio.id}
						name="type"
						value={radio.id}
						component="input"
						onClick={() => onDish(radio.id)}
						required
					/>
					<label htmlFor={radio.id} className={styles['radio-label']}>
						{radio.label}
					</label>
				</div>
			))}
		</div>
	);
};

export default RadioGroup;
