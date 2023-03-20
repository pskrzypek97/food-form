import { useState } from 'react';

import { Form, Field } from 'react-final-form';

import Input from '../Input/Input';
import RadioGroup from '../RadioGroup/RadioGroup';

import { inputs } from '../../data/inputs';

import styles from '../../styles/form.module.css';

const onSubmit = async (values: any) => {
	console.log(values);
};

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
