import { useState } from 'react';

import { Form } from 'react-final-form';

import TextInput from '../TextInput/TextInput';
import RadioGroup from '../RadioGroup/RadioGroup';
import Buttons from '../Buttons/Buttons';

import { inputs } from '../../data/inputs';

import { postFormData } from '../../utils';

import { Values } from '../../models/values';

import styles from '../../styles/form.module.css';

const FormComp = ({ onServer }: { onServer: (arg0: string) => void }) => {
	const [currentDish, setCurrentDish] = useState<string | null>(null);

	const handleDish = (dish: string) => setCurrentDish(dish);

	const onSubmit = async (values: Values) => {
		try {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(values),
			};

			const result = await postFormData(
				'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/',
				requestOptions
			);

			console.log(result);
			onServer('Data successfully submitted!');
		} catch (err) {
			onServer('An error has occured, please reload the page.');
		}
	};

	return (
		<Form
			onSubmit={onSubmit}
			destroyOnUnregister
			render={({ handleSubmit, form }) => (
				<form action="#" className={styles['form']} onSubmit={handleSubmit}>
					<h2>1. Choose the name and preparation time of your dish:</h2>
					{inputs
						.filter((condition) => !condition.dish)
						.map((input) => (
							<TextInput {...input} key={input.id} />
						))}

					<h2>2. Pick a type of dish...</h2>
					<RadioGroup onDish={handleDish} />

					{currentDish && <h2>3. ... and customize it</h2>}
					{inputs
						.filter((condition) => currentDish === condition.dish)
						.map((input) => (
							<TextInput {...input} key={input.id} />
						))}

					<Buttons reset={form.reset} />
				</form>
			)}
		/>
	);
};

export default FormComp;
