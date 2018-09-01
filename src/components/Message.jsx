import React from "react";

const Message = (props) => {
		const { text, senderId } = props.message;
		return (
			<div className="message">
				<div className="message-username">{senderId}</div>
				<div className="message-text">{text}</div>
			</div>
		);
}

export default Message;
