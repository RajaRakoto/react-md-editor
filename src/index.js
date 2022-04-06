import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
/* components */
import Editor from './components/editor/editor';
/* styles */
import './index.scss';
/* assets */
import githubLogo from './assets/github-ico.svg';
import markdownLogo from './assets/markdown-ico.svg';
/* vars */
const package_json = require('../package.json');
const date = new Date();

//TODO: verified - header (title, version, logo)
function Header() {
	const title1 = 'Markdown';
	const title2 = '< Editor />';
	const version = 'beta ' + package_json.version;
	return (
		<header>
			<img src={markdownLogo} alt="md-editor official logo" width={100}></img>
			<h1 id="title">
				{title1} <span>{title2}</span>
			</h1>
			<p id="version">{version}</p>
		</header>
	);
}

//TODO: verified - footer (copyright, links, author)
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

//TODO: verified - all render
ReactDOM.render(
	<Fragment>
		<div className="background--custom"></div>
		<Header />
		<Editor />
		<Footer />
	</Fragment>,
	document.getElementById('root'),
);

reportWebVitals();
