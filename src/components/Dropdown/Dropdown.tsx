import { Field } from 'react-final-form';

import styles from '../../styles/dropdown.module.css';

const Dropdown = ({
	name,
	component,
	values,
}: {
	name: any;
	component: any;
	values: any;
}) => {
	return (
		<Field name={name} component={component}>
			{values.map((value: any) => (
				<option value={value} key={value}>
					{value}
				</option>
			))}
		</Field>
	);
};

export default Dropdown;
