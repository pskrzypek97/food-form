import FormComp from './components/Form/Form';

const App = () => {
	return (
		<section className="main">
			<div className="background-color">
				<h1 className="heading-1">Food Form</h1>
			</div>
			<div className="form-wrapper">
				<FormComp />
			</div>
		</section>
	);
};

export default App;
