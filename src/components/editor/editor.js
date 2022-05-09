import React, { Component } from 'react';
import { textTemplate } from './textTemplate';
import { marked } from 'marked';
import './editor.min.css';

export default class Editor extends Component {
	state = {
		// textTemplate -> valeur par defaut pour textarea
		typing: textTemplate,
	};

	componentDidUpdate() {
		const typing = this.state.typing;
		localStorage.setItem('typing-data', typing);
	}

	componentDidMount() {
		const typing = localStorage.getItem('typing-data');

		if (typing) {
			this.setState({ typing }); //get localstorage data
		} else {
			const typing = this.state.typing;
			this.setState({ typing });
		}
	}

	handleChange = event => {
		// ecouteur d'evenement sur chaque changement
		const typing = event.target.value;
		// mise a jour du state en incluant typing comme objet par destructuring
		this.setState({ typing });
	};

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
		const editorSize = 49;
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
								rows={editorSize}
								cols="40"
								className="form-control z-depth-1"
								placeholder="Ecrivez vos code markdown par ici OU appuyez sur [F5] pour reafficher le modele de code ..."
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
