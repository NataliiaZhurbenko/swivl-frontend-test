import React from 'react';

import UsersList from './users-list';
import UserDetail from './user-detail';
import usersAPI from '../users-api';


export default class UsersPanel extends React.Component {
  render() {
    let usersList = usersAPI.fetch();

    return (
      <div>
        <UsersList users={usersList} />
        <UserDetail />
      </div>
    );
  }
}
