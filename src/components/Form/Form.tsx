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
	const [currentDish, setCurrentDish] = useState('pizza');

	const handleDish = (dish: string) => setCurrentDish(dish);

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{ type: 'pizza' }}
			destroyOnUnregister
			render={({ handleSubmit, form }) => (
				<form action="#" className={styles.form} onSubmit={handleSubmit}>
					{inputs.map((input) => (
						<Input {...input} key={input.id} />
					))}

					<div className={styles['form-group']}>
						<RadioGroup onDish={handleDish} />
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
