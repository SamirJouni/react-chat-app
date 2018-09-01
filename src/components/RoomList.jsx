import React, { Component } from "react";

class RoomList extends Component {
	render() {
		return (
			<div className="room-list">
				<ul>
					<h3>Rooms:</h3>
					{this.props.rooms.map(room => (
						<li key={room.id} className="room">
							<a onClick={() => this.props.subscribeToRoom(room.id)}># {room.name}</a>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default RoomList;
