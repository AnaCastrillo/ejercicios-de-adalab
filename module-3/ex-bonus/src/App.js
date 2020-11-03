import React from 'react';
import './App.scss';
import logo from './adalab-logo.png';

class App extends React.Component {
	render() {
		return (
			<div>
				<header>
					<div class="logo">
						<a href="https://adalab.es/" title="Adalab">
							<img src={logo} alt="Enlace Adalab" title="Adalab" />
						</a>
					</div>
					<nav class="menu">
						<ul>
							<li>
								<a
									href="https://github.com/AnaCastrillo/ejercicios-de-adalab"
									target="_blank"
									rel="noreferrer"
									title="Visita mi GitHub"
								>
									Blog
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/callmeferre"
									target="_blank"
									rel="noreferrer"
									title="Hablame en Twitter"
								>
									Contacto
								</a>
							</li>
						</ul>
					</nav>
				</header>
				<main>
					<h1>Creando diversidad digital</h1>
				</main>
			</div>
		);
	}
}

export default App;
