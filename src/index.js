import React from "react";
import ReactDOM from "react-dom";
import UsersSidebar from "./users-sidebar";
import MessageContainer from "./message-container";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      input: "",
      users: [
        {
          name: "sunny",
          color: "gray",
          messages: [
            {
              content: "Hello, how are you?",
              type: "sender"
            },
            {
              content:
                "hai, I'm good, how are you?",
              type: "recipient"
            },
            {
              content:
                "I'm good ,what are you doing?",
              type: "sender"
            },
            {
              content: "watching series",
              type: "recipient"
            }
          ]
        },
        {
          name: "bunny",
          color: "gray",
          messages: [
            {
              content: "Whats up?",
              type: "sender"
            },
            ,
            {
              content: "nothing you?",
              type: "recipient"
            }
          ]
        }
      ],
      selectedUserIndex: 0,
      colors: [
        "blue",
        "red"
      ] 
    };
    

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onUserClick = this.onUserClick.bind(this);
    
  }

  onChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  onSubmit(e) {
    var users = this.state.users;
    var color = this.state.colors[
      Math.floor(Math.random() * this.state.colors.length)
    ];

    
    users.push({
      name: this.state.input,
      color: color
    });

    this.setState({
      users: users
    });

    this.setState({
      input: ""
    });
  }

  onUserClick(index) {
    console.log("made it: " + index);
    this.setState({
      selectedUserIndex: index
    });
  }

  render() {
    return (
      <div className="App">
        <UsersSidebar users={this.state.users} onSelection={this.onUserClick} />
        <MessageContainer
          user={this.state.users[this.state.selectedUserIndex]}
        />
        
      </div>
    );
  }
}

  

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
