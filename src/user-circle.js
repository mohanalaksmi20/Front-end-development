import React from "react";
import "./styles.css";

class UserCircle extends React.Component {
  render() {
    let styles = {
      backgroundColor: this.props.user.color
    };

    return (
      <div className="circle" style={styles}>
        {this.props.user.name.charAt(0).toUpperCase()}
      </div>
    );
  }
}

export default UserCircle;
