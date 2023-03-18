import { Field } from 'react-final-form';

import styles from '../../styles/dropdown.module.css';

const Dropdown = ({ onDish }: { onDish: (arg0: string) => void }) => {
	return (
		<Field name="type" component="select">
			{['pizza', 'soup', 'sandwich'].map((dish) => (
				<option value={dish} key={dish} onClick={() => onDish(dish)}>
					{dish}
				</option>
			))}
		</Field>
	);
};

export default Dropdown;
