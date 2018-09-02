import React, { Component } from "react";

class RoomList extends Component {
	render() {
		const sortedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id);
		return (
			<div className="room-list">
				<ul>
					<h3>Rooms:</h3>
					{sortedRooms.map(room => {
						const active = this.props.roomId === room.id ? " active" : "";
						return (
							<li key={room.id} className={"room" + active}>
								<a onClick={() => this.props.subscribeToRoom(room.id)}>
									# {room.name}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default RoomList;
