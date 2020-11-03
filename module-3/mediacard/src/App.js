import React from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends React.Component {
	render() {
		let cardTitle = 'Alex Guerrero';
		let cardDate = 'Lunes 26 de junio de 2017';
		let cardContent =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pellentesque felis a nunc elementum, nec maximus mauris tempor. Pellentesque et mi in eros ultrices condimentum. Proin malesuada, sem vitae viverra ullamcorper, odio enim varius urna, ut vehicula lectus nisl sed velit. Phasellus sollicitudin accumsan dictum. Fusce ligula quam, fringilla ut est a, consequat rutrum lacus. Quisque facilisis imperdiet lorem vitae cursus. Ut quis venenatis erat. Aliquam consequat varius tempor. Vivamus ut libero vestibulum, tristique sem at, viverra leo. Integer feugiat dolor mi, ut tincidunt lorem viverra id. Sed vitae lectus convallis urna consectetur interdum. Suspendisse sodales consectetur rhoncus. Donec ultricies urna mi, nec luctus urna scelerisque vitae. Sed pulvinar eget sem non egestas.';
		let likeNum = '4';
		return (
			<div className="card">
				<header className="card-header">
					<img src={logo} className="card-header-icon" alt="icon" />
					<h2 className="card-header-title">{cardTitle}</h2>
					<span className="card-header-date">{cardDate}</span>
				</header>
				<div className="card-content">{cardContent}</div>
				<footer className="card-footer">
					<button className="card-footer-link">Leer más...</button>
					<p className="card-footer-like">
						<span>{likeNum}</span>
					</p>
				</footer>
			</div>
		);
	}
}

export default App;
