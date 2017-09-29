import React from 'react';
import classNames from 'classnames';


export default class UsersListItem extends React.Component {
  userSelected() {
    this.props.selectItem(/*data=*/this.props.data);
  }

  render() {
    return (
      <div className={classNames({itemSelected: this.props.selected})}>
        <img onClick={() => this.userSelected()}
             src={this.props.data.avatar_url}
             width="100" />
        <div>
          <a href={this.props.data.html_url} target="_blank">{this.props.data.login}</a>
        </div>
        <br />
      </div>
    );
  }
}
