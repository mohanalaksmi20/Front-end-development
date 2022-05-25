import React from "react";
import "./styles.css";

class MessageInputBar extends React.Component {
  render() {
    return (
      <div className="message-input-bar-container">
     
        
         <input  type = "text" placeholder = "message"/>
        <button>send</button>
      </div>
    );
  }
}

export default MessageInputBar;
