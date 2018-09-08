import React from "react";

const Message = (props) => {
		const { text, sender } = props.message;
		return (
			<div className="message">
				<div className="message-username">{sender.name}</div>
				<div className="message-text">{text}</div>
			</div>
		);
}

export default Message;
