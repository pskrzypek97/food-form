import { useState } from 'react';

import { Form, Field } from 'react-final-form';

import Input from '../Input/Input';
import Dropdown from '../Dropdown/Dropdown';

import styles from '../../styles/form.module.css';

const onSubmit = async (values: any) => {
	console.log(values);
};

const inputs = [
	{
		type: 'text',
		component: 'input',
		id: 'name',
		name: 'name',
		placeholder: 'Name',
	},
	{
		type: 'text',
		component: 'input',
		id: 'preparation_time',
		name: 'preparation_time',
		placeholder: 'Preparation Time',
	},
];

const FormComp = () => {
	const [currentDish, setCurrentDish] = useState('');

	const handleDish = (dish: string) => setCurrentDish(dish);

	return (
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, form }) => (
				<form action="#" className={styles.form} onSubmit={handleSubmit}>
					{inputs.map((input) => (
						<Input {...input} key={input.id} />
					))}
					<div className={styles['form-group']}>
						<Dropdown onDish={handleDish} />
					</div>

					{currentDish === 'pizza' && (
						<>
							<div className={styles['form-group']}>
								<Field
									type="text"
									id="no_of_slices"
									name="no_of_slices"
									component="input"
									placeholder="Number of slices"
								/>
							</div>
							<div className={styles['form-group']}>
								<Field
									type="text"
									id="diameter"
									name="diameter"
									component="input"
									placeholder="Diameter"
								/>
							</div>
						</>
					)}
					{currentDish === 'soup' && (
						<div className={styles['form-group']}>
							<Field
								type="text"
								id="spiciness_scale"
								name="spiciness_scale"
								component="input"
								placeholder="Spiciness scale"
							/>
						</div>
					)}
					{currentDish === 'sandwich' && (
						<div className={styles['form-group']}>
							<Field
								type="text"
								id="slices_of_bread"
								name="slices_of_bread"
								component="input"
								placeholder="Slices of bread"
							/>
						</div>
					)}

					<button type="submit" className={styles['form__button']}>
						Submit
					</button>
				</form>
			)}
		/>
	);
};

export default FormComp;
