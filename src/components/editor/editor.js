import React, { Component } from 'react';
import './editor.scss';
import { textTemplate } from './textTemplate';

export default class Editor extends Component {
	//TODO: verified
	state = {
		sampleText: textTemplate,
	};

	//TODO: verified
	handleChange = event => {
		const typingText = event.target.value;
		this.setState({ typingText });
		console.log('typing !');
	};

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
						<div id="area_text">
							<label for="input">Input:</label>
							<br></br>
							<textarea
								onChange={this.handleChange}
								id="input"
								name="input"
								rows="25"
								cols="40"
								className="form-control z-depth-1"
								// value={this.state.sampleText}
							></textarea>
						</div>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
						<div id="area_md">
							<label for="output">Output:</label>
							<br></br>
							<textarea
								id="output"
								name="output"
								rows="25"
								cols="40"
								className="form-control z-depth-1"
							></textarea>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
