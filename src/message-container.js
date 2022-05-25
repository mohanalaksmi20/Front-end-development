import React from "react";
import Message from "./message";
import MessageInputBar from "./message-input-bar";
import "./styles.css";

class MessageContainer extends React.Component {
  render() {
    var messages;

    if (this.props.user != null && this.props.user.messages != null) {
      messages = this.props.user.messages.map(message => {
        return <Message message={message} />;
      });
    }

    var name = this.props.user != null ? this.props.user.name : "No users selected";
    return (
      <div className="message-window-container">
        <div className="message-container">
          {name}
          {messages}
        </div>
        <MessageInputBar />
        
      </div>
    );
  }
}

export default MessageContainer;
