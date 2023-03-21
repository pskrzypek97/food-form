import { useState } from 'react';

import FormComp from './components/Form/Form';

const App = () => {
	const [serverMessage, setServerMessage] = useState<string | null>(null);

	const handleServerMessage = (message: string) => setServerMessage(message);

	return (
		<section className="main">
			<div className="background-color">
				<h1 className="heading-1">Food Form</h1>
			</div>
			<div className="form-wrapper">
				<FormComp onServer={handleServerMessage} />
				{serverMessage && <p>{serverMessage}</p>}
			</div>
		</section>
	);
};

export default App;
