import { Field } from 'react-final-form';

// import Dropdown from '../Dropdown/Dropdown';

import styles from '../../styles/form.module.css';

const Input = (props: any) => {
	return (
		<div className={styles['form-group']}>
			<Field
				type={props.type}
				id={props.id}
				name={props.name}
				component={props.component}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default Input;
