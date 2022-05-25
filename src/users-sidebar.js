import React from "react";
import UserRow from "./user-row";
import "./styles.css";

class UsersSidebar extends React.Component {
  render() {
    var users = this.props.users;
    var nameCircles = users.map((user, index) => {
      return (
        <UserRow
          user={user}
          index={index}
          onSelection={this.props.onSelection}
        />
        
      );
    });
    const createChat = () => {
      const roomName = prompt("Please enter name for chat");
  
      if (roomName) {
       
      }
    };

    
    return (
      <div className="users-sidebar-container">
        <div onClick={createChat} className="sidebar-header">
            <h3>Add Contact</h3></div>
            {nameCircles}

        
      </div>
    
    );
  
  }
}

export default UsersSidebar;
