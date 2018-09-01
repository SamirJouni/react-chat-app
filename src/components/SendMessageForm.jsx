import React, { Component } from "react";

class sendMessageForm extends Component {

	constructor () {
		super();
		this.state = {
			message: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			message: e.target.value
		})
	}

	handleSubmit = () => {
		e.preventDefault();

	}


	render() {
		return (
			<form className="send-message-form" onSubmit={this.handleSubmit}>
				<input
					onChange={this.handleChange}
					type="text"
					value={this.state.message}
					placeholder="Type A Message And Hit Enter"
				/>
			</form>
		);
	}
}

export default sendMessageForm;
