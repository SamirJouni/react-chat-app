import React, { Component } from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

class MessageList extends Component {
	componentWillUpdate() {
		const node = ReactDOM.findDOMNode(this);
		this.shouldScrollToBottom =
			node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;
	}

	componentDidUpdate() {
		if (this.shouldScrollToBottom) {
			const node = ReactDOM.findDOMNode(this);
			node.scrollTop = node.scrollHeight;
		}
	}

	render() {
		if (!this.props.roomId) {
			return (
				<div className="message-list">
					<div className="join-room">&larr; Join A Room !</div>
				</div>
			);
		}
		return (
			<div className="message-list">
				{this.props.messages.map((message, i) => (
					<Message key={i} message={message} />
				))}
			</div>
		);
	}
}

export default MessageList;
