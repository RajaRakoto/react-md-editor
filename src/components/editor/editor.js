import React, { Component } from 'react';
import './editor.scss';
import { textTemplate } from './textTemplate';
import { marked } from 'marked';

export default class Editor extends Component {
	//TODO: verified - editor state
	state = {
		// textTemplate -> valeur par defaut pour textarea
		typing: textTemplate,
	};

	//TODO: verified - save typing state
	componentDidUpdate() {
		const typing = this.state.typing;
		localStorage.setItem('typing-data', typing);
	}

	//TODO: verified - get typing last state
	componentDidMount() {
		const typing = localStorage.getItem('typing-data');

		if (typing) {
			this.setState({ typing }); //get localstorage data
		} else {
			const typing = this.state.typing;
			this.setState({ typing });
		}
	}

	//TODO: verified - sync typing with editor state
	handleChange = event => {
		// ecouteur d'evenement sur chaque changement
		const typing = event.target.value;
		// mise a jour du state en incluant typing comme objet par destructuring
		this.setState({ typing });
	};

	//TODO: work - marked core
	/**
	 *
	 * @param {state} typing test2
	 * @returns text to markdown
	 */
	renderToMarkdown = typing => {
		// arg: sanitize - mise en forme des codes HTML vers markdown
		return { __html: marked(typing, { sanitize: false }) };
	};

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
						<div id="area_text">
							<label className="d-flex justify-content-center" for="input">
								Input
							</label>
							<br></br>
							<textarea
								id="input"
								name="input"
								rows="33"
								cols="40"
								className="form-control z-depth-1"
								value={this.state.typing}
								onChange={this.handleChange}
							></textarea>
						</div>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
						<div id="area_md">
							<label className="d-flex justify-content-center" for="output">
								Output
							</label>
							<br></br>
							<div id="output" name="output">
								<div
									dangerouslySetInnerHTML={this.renderToMarkdown(
										this.state.typing,
									)}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
