import React, { Component } from "react";
import Chatkit from "@pusher/chatkit";
import RoomList from "../components/RoomList";
import MessageList from "../components/MessageList";
import SendMessageForm from "../components/SendMessageForm";
import NewRoomForm from "../components/NewRoomForm";
import "./App.css";
import { tokenUrl, instanceLocator } from "./config";

class App extends Component {
	constructor() {
		super();
		this.state = {
			messages: [],
			joinableRooms: [],
			joinedRooms: [],
			roomId: null
		};
	}

	componentDidMount() {
		const chatManager = new Chatkit.ChatManager({
			instanceLocator,
			userId: "johnDoe",
			tokenProvider: new Chatkit.TokenProvider({ url: tokenUrl })
		});
		chatManager
			.connect()
			.then(currentUser => {
				this.currentUser = currentUser;
				this.getRooms();
			})
			.catch(error => console.log("failed to connect to service", error));
	}

	getRooms = () => {
		this.currentUser
			.getJoinableRooms()
			.then(joinableRooms =>
				this.setState({
					joinableRooms,
					joinedRooms: this.currentUser.rooms
				})
			)
			.catch(error => console.log("Failed To Fetch Joined Rooms", error));
	};
	subscribeToRoom = roomId => {
		this.setState({ messages: [] });
		this.currentUser
			.subscribeToRoom({
				roomId,
				hooks: {
					onNewMessage: message => {
						this.setState({ messages: [...this.state.messages, message] });
					}
				}
			})
			.then(room => {
				this.setState({ roomId: room.id });
				this.getRooms();
			})
			.catch(error => console.log("Failed To Get Rooms", error));
	};
	sendMessage = text => {
		this.currentUser.sendMessage({
			text,
			roomId: this.state.roomId
		});
	};

	render() {
		return (
			<div className="App">
				<RoomList
					rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
					subscribeToRoom={this.subscribeToRoom}
				/>
				<MessageList messages={this.state.messages} />
				<SendMessageForm sendMessage={this.sendMessage} />
				<NewRoomForm />
			</div>
		);
	}
}

export default App;
