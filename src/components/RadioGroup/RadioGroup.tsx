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
		<>
			{radios.map((radio) => (
				<div key={radio.id}>
					<Field
						type="radio"
						id={radio.id}
						name="type"
						value={radio.id}
						component="input"
						onClick={() => onDish(radio.id)}
					/>
					<label htmlFor={radio.id}>{radio.label}</label>
				</div>
			))}
		</>
	);
};

export default RadioGroup;
