import React from 'react';

import UsersListItem from './users-list-item';
import CustomEvents from '../custom-events';
import usersAPI from '../users-api';


const USERS_API_URL = 'https://api.github.com/users?since=';


export default class UsersList extends React.Component {
  constructor() {
    super();
    this.users = null;
    this.state = {};
  }

  selectItem(data) {
    this.setState(data);

    CustomEvents.notify(
      'user-selected', data
    );
  }

  updatePage() {
    this.users = this.users.concat(usersAPI.fetch());
    this.setState({});
  }

  loadMore() {
    usersAPI.addResponseReadyCallback(() => this.updatePage());
    let lastUserId = this.users[this.users.length - 1].id;
    usersAPI.load(USERS_API_URL + lastUserId);
  }

  render() {
    if (this.users == null) {
      this.users = this.props.users;
    }

    let users = this.users.map(
      (item) => (
        <UsersListItem key={item.id}
                       data={item}
                       selectItem={(...args) => this.selectItem(...args)}
                       selected={this.state.id === item.id}>
        </UsersListItem>
      )
    );

    return (
      <div>
        <div className="users-list">{users}</div>
        <div><button onClick={() => this.loadMore()}>Load more</button></div>
      </div>
    );
  }
}
