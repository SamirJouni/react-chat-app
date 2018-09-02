import React, { Component } from "react";

class NewRoomForm extends Component {

	constructor(){
		super();
		this.state = {
			roomName: ""
		}
	}

	handleChange = (e) => {
		this.setState({roomName: e.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createRoom(this.state.roomName);
	}

	render() {
		return (
			<div className="new-room-form">
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChange} type="text" placeholder="New Room" required />
					<button id="create-room-btn" type="submit">
						+
					</button>
				</form>
			</div>
		);
	}
}

export default NewRoomForm;
