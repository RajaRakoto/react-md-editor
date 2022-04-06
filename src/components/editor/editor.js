import React, { Component } from 'react';
import './editor.scss';

export default class Editor extends Component {
	render() {
		return (
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div id="area_text">
							<label for="input">Input:</label>
							<br></br>
							<textarea
								id="input"
								name="input"
								rows="30"
								cols="60"
								className="form-control z-depth-1"
							></textarea>
						</div>
					</div>
					<div class="col-md-6">
						<div id="area_md">
							<label for="output">Output:</label>
							<br></br>
							<textarea
								id="output"
								name="output"
								rows="30"
								cols="60"
								className="form-control z-depth-1"
							></textarea>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
