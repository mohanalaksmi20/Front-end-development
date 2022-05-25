import React from "react";
import "./styles.css";

class Message extends React.Component {
  render() {
    var isSender = this.props.message.type == "sender";

    let styles = {
      alignSelf: isSender ? "flex-start": "flex-end",
      backgroundColor: isSender ? "brown" : "lightgreen",
      color: isSender ? "white" : "#333",
      borderRadius: isSender ? "12px 12px 0 12px" : "12px 12px 12px 0"
    };

    return (
      <div className="message"  style={styles}>
        {this.props.message.content}
        
      </div>
    );
  }
}

export default Message;
