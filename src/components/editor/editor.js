import React, { Component } from 'react';
import './editor.scss';

export default class Editor extends Component {
	render() {
		return (
			<div class="container-fluid">
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
						<div id="area_text">
							<label for="input">Input:</label>
							<br></br>
							<textarea
								id="input"
								name="input"
								rows="25"
								cols="40"
								className="form-control z-depth-1"
							></textarea>
						</div>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
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
