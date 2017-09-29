import React from 'react';
import CustomEvents from '../custom-events';
import usersAPI from '../users-api';


export default class UserDetail extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  userSelected(data) {
    usersAPI.addResponseReadyCallback(() => this.setState(usersAPI.fetch()));
    usersAPI.load(data.url);
  }


  componentDidMount() {
    CustomEvents.subscribe(
      'user-selected',
      (data) => this.userSelected(data)
    );
  }

  componentDidUnMount() {
    CustomEvents.unsubscribe('user-selected');
  }

  render() {
    return (
      <div className="detail-panel">
        <img src={this.state.avatar_url} />
        <p>User login: {this.state.login}</p>
        <p>User name: {this.state.name}</p>
        <p>Followers: {this.state.followers}</p>
        <p>Following: {this.state.following}</p>
        <p>Created_at: {this.state.created_at}</p>
        <p>Company: {this.state.company}</p>
        <p>Email: {this.state.email}</p>
        <p>Location: {this.state.location}</p>
        <p>Blog: {this.state.blog}</p>
        <p>Bio: {this.state.bio}</p>
      </div>
    );
  }
}
