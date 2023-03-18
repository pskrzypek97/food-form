import { Form, Field } from 'react-final-form';

import Input from '../Input/Input';

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
	{
		component: 'select',
		id: 'type',
		values: ['pizza', 'soup', 'sandwich'],
	},
];

const FormComp = () => (
	<Form
		onSubmit={onSubmit}
		render={({ handleSubmit, form }) => (
			<form action="#" className={styles.form} onSubmit={handleSubmit}>
				{inputs.map((input) => (
					<Input {...input} key={input.id} />
				))}
				<button type="submit" className={styles['form__button']}>
					Submit
				</button>
			</form>
		)}
	/>
);

export default FormComp;
