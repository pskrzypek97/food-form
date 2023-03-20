import { useState } from 'react';

import { Form } from 'react-final-form';

import TextInput from '../TextInput/TextInput';
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
				<form action="#" className={styles['form']} onSubmit={handleSubmit}>
					<h2>1. Choose a name and preparation time of your dish:</h2>
					{inputs
						.filter((condition) => !condition.dish)
						.map((input) => (
							<TextInput {...input} key={input.id} />
						))}

					<h2>2. Pick a type of dish...</h2>

					<RadioGroup onDish={handleDish} />

					{currentDish !== '' && <h2>3. ... and customize it</h2>}
					{inputs
						.filter((condition) => currentDish === condition.dish)
						.map((input) => (
							<TextInput {...input} key={input.id} />
						))}

					<div className={styles['buttons-container']}>
						<button type="submit" className={styles['form__button']}>
							Submit
						</button>
						<button
							type="button"
							className={styles['form__button--reset']}
							onClick={form.reset}
						>
							Reset
						</button>
					</div>
				</form>
			)}
		/>
	);
};

export default FormComp;
