import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    user: [],
    followers: [],
    userSearch: "",
    error: ""
  };

  componentDidMount() {
    axios
    .get("https://api.github.com/users/jjbreig5909")
    .then(res => {
      this.setState({...this.state, user: res.data });
      console.log(this.state.user);
    })
    .catch(error => console.log(error));
    axios
    .get("https://api.github.com/users/jjbreig5909/followers")
    .then(res=> {
      this.setState({...this.state, followers: res.data})
      console.log(this.state.followers);
    })
    .catch(error => console.log(error));

  }

  render() {
    return(
      <div className="user-card">
        <div className="card-header">
          <div className="user-name">
            <h1>{this.state.user.login}</h1>
            <p className="user-name">{this.state.user.name}</p>
            <p className="user-location">{this.state.user.location}</p>
          </div>
          <img src={this.state.user.avatar_url}></img>
        </div>
        <hr />
        <p className="user-bio">{this.state.user.bio}</p>
        <h3 className="follower-title">Followers</h3>
        <ul className="followers">{this.state.followers.map(follower => {
          return <li className="user-follower">{follower.login}</li>})}</ul>
      </div>
    )
  }
}

export default App;
