import React, { Component } from "react";

const DUMMY_DATA = [
	{
		senderId: "johnDoe",
		text: "hey there, I'm new"
	},
	{
		senderId: "janeDoe",
		text: "welcome to this chatroom"
	},
	{
		senderId: "johnDoe",
		text: "oh, that's a warm welcome ! Thanks."
	}
];

class MessageList extends Component {
	render() {
		return (
			<div className="message-list">
				{DUMMY_DATA.map((message, i) => (
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
