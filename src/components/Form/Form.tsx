import { useState } from 'react';

import { Form, Field } from 'react-final-form';

import Input from '../Input/Input';
import RadioGroup from '../RadioGroup/RadioGroup';

import styles from '../../styles/form.module.css';

const onSubmit = async (values: any) => {
	console.log(values);
};

const inputs = [
	{
		id: 'name',
		name: 'name',
		placeholder: 'Name',
		validate: (value: string) => {
			if (!value) return 'Required';
		},
	},
	{
		id: 'preparation_time',
		name: 'preparation_time',
		placeholder: 'Preparation Time',
		validate: (value: string | number) => {
			if (!value) return 'Required';
			if (isNaN(value as number)) return 'Must be a number';
			if (value < 1) return 'Must be at least 1 slice';
			if ((value as number) % 1 !== 0) return 'Must be a full number';
		},
	},
	{
		dish: 'pizza',
		id: 'no_of_slices',
		name: 'no_of_slices',
		placeholder: 'Number of slices',
		validate: (value: string | number) => {
			if (!value) return 'Required';
			if (isNaN(value as number)) return 'Must be a number';
			if (value < 1) return 'Must be at least 1 slice';
			if ((value as number) % 1 !== 0) return 'Must be a full number';
		},
	},
	{
		dish: 'pizza',
		id: 'diameter',
		name: 'diameter',
		placeholder: 'Diameter',
		validate: (value: string | number) => {
			if (!value) return 'Required';
			if (isNaN(value as number)) return 'Must be a number';
			if (value < 1) return 'Must be more than 0';
		},
	},

	{
		dish: 'soup',
		id: 'spiciness_scale',
		name: 'spiciness_scale',
		placeholder: 'Spiciness scale (1-10)',
		validate: (value: string | number) => {
			if (!value) return 'Required';
			if (isNaN(value as number)) return 'Must be a number';
			if (value < 1 || value > 10) return 'Must be between 1 and 10';
			if ((value as number) % 1 !== 0) return 'Must be a full number';
		},
	},

	{
		dish: 'sandwich',
		id: 'slices_of_bread',
		name: 'slices_of_bread',
		placeholder: 'Slices of bread',
		validate: (value: string | number) => {
			if (!value) return 'Required';
			if (isNaN(value as number)) return 'Must be a number';
			if (value < 1 || value > 50) return 'Must be between 1 and 50';
			if ((value as number) % 1 !== 0) return 'Must be a full number';
		},
	},
];

const FormComp = () => {
	const [currentDish, setCurrentDish] = useState('');

	const handleDish = (dish: string) => setCurrentDish(dish);

	return (
		<Form
			onSubmit={onSubmit}
			destroyOnUnregister
			render={({ handleSubmit, form }) => (
				<form action="#" className={styles.form} onSubmit={handleSubmit}>
					<h2>1. Choose a name and preparation time of your dish:</h2>
					{inputs
						.filter((condition) => !condition.dish)
						.map((input) => (
							<Input {...input} key={input.id} />
						))}

					<h2>2. Pick a type of dish:</h2>
					<div className={styles['form-group']}>
						<RadioGroup onDish={handleDish} />
					</div>

					<h2>3. Customize it:</h2>
					{inputs
						.filter((condition) => currentDish === condition.dish)
						.map((input) => (
							<Input {...input} key={input.id} />
						))}

					<button type="submit" className={styles['form__button']}>
						Submit
					</button>
					<button
						type="button"
						className={styles['form__button']}
						onClick={form.reset}
					>
						Reset
					</button>
				</form>
			)}
		/>
	);
};

export default FormComp;
