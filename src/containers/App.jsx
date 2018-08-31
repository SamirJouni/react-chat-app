import React, { Component } from "react";
import RoomList from "../components/RoomList";
import MessageList from "../components/MessageList";
import SendMessageForm from "../components/SendMessageForm";
import NewRoomForm from "../components/NewRoomForm";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<RoomList />
				<MessageList />
				<SendMessageForm />
				<NewRoomForm />
			</div>
		);
	}
}

export default App;
