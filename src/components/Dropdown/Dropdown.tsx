import styles from '../../styles/dropdown.module.css';

const Dropdown = () => {
	return (
		<select name="type" id="type">
			<option value="pizza">Pizza</option>
			<option value="sandwich">Sandwich</option>
			<option value="soup">Soup</option>
		</select>
	);
};

export default Dropdown;
