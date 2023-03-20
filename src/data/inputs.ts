export const inputs = [
	{
		id: 'name',
		name: 'name',
		placeholder: 'Name',
		validate: (value: string) => {
			if (!value) return 'Required';
		},
	},
	{
		id: 'preparation_time',
		name: 'preparation_time',
		placeholder: 'Preparation Time',
		validate: (value: string | number) => {
			if (!value) return 'Required';
			if (isNaN(value as number)) return 'Must be a number';
			if (value < 1) return 'Must be at least 1 slice';
			if ((value as number) % 1 !== 0) return 'Must be a full number';
		},
	},
	{
		dish: 'pizza',
		id: 'no_of_slices',
		name: 'no_of_slices',
		placeholder: 'Number of slices',
		validate: (value: string | number) => {
			if (!value) return 'Required';
			if (isNaN(value as number)) return 'Must be a number';
			if (value < 1) return 'Must be at least 1 slice';
			if ((value as number) % 1 !== 0) return 'Must be a full number';
		},
	},
	{
		dish: 'pizza',
		id: 'diameter',
		name: 'diameter',
		placeholder: 'Diameter',
		validate: (value: string | number) => {
			if (!value) return 'Required';
			if (isNaN(value as number)) return 'Must be a number';
			if (value < 1) return 'Must be more than 0';
		},
	},

	{
		dish: 'soup',
		id: 'spiciness_scale',
		name: 'spiciness_scale',
		placeholder: 'Spiciness scale (1-10)',
		validate: (value: string | number) => {
			if (!value) return 'Required';
			if (isNaN(value as number)) return 'Must be a number';
			if (value < 1 || value > 10) return 'Must be between 1 and 10';
			if ((value as number) % 1 !== 0) return 'Must be a full number';
		},
	},

	{
		dish: 'sandwich',
		id: 'slices_of_bread',
		name: 'slices_of_bread',
		placeholder: 'Slices of bread',
		validate: (value: string | number) => {
			if (!value) return 'Required';
			if (isNaN(value as number)) return 'Must be a number';
			if (value < 1 || value > 50) return 'Must be between 1 and 50';
			if ((value as number) % 1 !== 0) return 'Must be a full number';
		},
	},
];
