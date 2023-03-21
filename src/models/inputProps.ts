export interface InputProps {
	dish?: string;
	name: string;
	id: string;
	placeholder: string;
	validate: (arg0: string) => string | undefined;
}
