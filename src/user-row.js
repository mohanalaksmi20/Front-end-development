import React from "react";
import UserCircle from "./user-circle";
import "./styles.css";

class UserRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("clicked");
    this.props.onSelection(this.props.index);
  }

  render() {
    return (
      <div className="user-row" onClick={this.handleClick}>
        <UserCircle user={this.props.user} />
        {this.props.user.name}
      </div>
    );
  }
}

export default UserRow;
