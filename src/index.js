import React from 'react';
import ReactDOM from 'react-dom';

import UsersPanel from './components/users-panel';
import usersAPI from './users-api';


const USERS_API_URL = 'https://api.github.com/users?since=0';


function responseReady() {
  ReactDOM.render(<UsersPanel />, document.getElementById('content'));
}


usersAPI.addResponseReadyCallback(/*responseReadyCallback=*/responseReady);
usersAPI.load(USERS_API_URL);
