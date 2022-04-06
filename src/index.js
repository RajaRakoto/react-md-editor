import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
/* components */
import Editor from './components/editor/editor';
/* styles */
import './index.scss';
/* assets */
import githubLogo from './assets/github-ico.svg';

/* vars */
const package_json = require('../package.json');
const date = new Date();

function Header() {
	const title = 'Markdown Editor';
	const version = 'version ' + package_json.version;
	return (
		<header>
			<h1 id="title">{title}</h1>
			<p id="version">{version}</p>
		</header>
	);
}

function Footer() {
	const copyright = '© ' + date.getFullYear() + ' - MIT license';
	const githubLink = (
		<a href="https://github.com/RajaRakoto/md-editor">
			<img src={githubLogo} alt="md-editor github" width={32}></img>
		</a>
	);
	const author = <a href="https://github.com/RajaRakoto/">by Raja</a>;

	return (
		<footer className="text-center text-lg-start">
			<div className="text-center p-3">
				<div className="row">
					<div className="col-md-6">
						{copyright} &nbsp;
						{author}
					</div>
					<div className="col-md-6">{githubLink}</div>
					<br></br>
				</div>
			</div>
		</footer>
	);
}

ReactDOM.render(
	<React.StrictMode>
		<div className="background--custom"></div>
		<Header />
		<Editor />
		<Footer />
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
