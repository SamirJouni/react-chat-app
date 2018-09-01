import React, { Component } from "react";

class MessageList extends Component {
	render() {
		return (
			<div className="message-list">
				{this.props.messages.map((message, i) => (
					<div className="message" key={i}>
						<div className="message-username">{message.senderId}</div>
						<div className="message-text">{message.text}</div>
					</div>
				))}
			</div>
		);
	}
}

export default MessageList;
