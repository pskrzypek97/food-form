import { Field } from 'react-final-form';

import Dropdown from '../Dropdown/Dropdown';

import styles from '../../styles/form.module.css';

const Input = (props: any) => {
	return (
		<div className={styles['form-group']}>
			{props.component === 'input' && (
				<>
					<Field
						type={props.type}
						id={props.id}
						name={props.name}
						component={props.component}
						placeholder={props.placeholder}
					/>
				</>
			)}
			{props.component === 'select' && (
				<Dropdown
					name={props.name}
					component={props.component}
					values={props.values}
				/>
				// <Field name={props.name} component={props.component}>
				// 	{props.values.map((value: any) => (
				// 		<option value={value} key={value}>
				// 			{value}
				// 		</option>
				// 	))}
				// </Field>
			)}
		</div>
	);
};

export default Input;
