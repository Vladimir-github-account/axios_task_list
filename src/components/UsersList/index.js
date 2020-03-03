import React, {Component} from 'react';
import {getUsers}         from '../../api';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      users: [],
      error: null,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    this.setState({
                    isFetching: true,
                  });
    try {
      const {users} = await getUsers();
      console.log(users);
      this.setState({
                      users
                    });
    } catch (e) {
      this.setState({
                      error: e
                    });
    } finally {
      this.setState({
                      isFetching: false,
                    });
    }
  };

  render() {
    const {users, isFetching} = this.state;
    console.log(users);
    return (
        <ol>
          {
            users.map(user => (
                <li key={user.id}>{user.firstName}</li>
            ))
          }
          {
            isFetching && <li>loading...</li>
          }
        </ol>
    );
  }
}

export default UserList;