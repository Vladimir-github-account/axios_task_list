import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { createTask }       from '../../api';

class TaskList extends Component {
  constructor(props) {
    super( props );
    this.state = {
      isFetching: false,
      task: null,
      error: null,
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.group( 'componentDidUpdate' );
    console.log( prevState );
    console.log( this.state );
    console.groupEnd();
  }

  createTask = async () => {
    try {
      this.setState( {
                       isFetching: true,
                     } );
      const { data } = await createTask();
      this.setState( {
                       task: data,
                     } );
    } catch (e) {
      this.setState( {
                       error: e
                     } );
    } finally {
      this.setState( {
                       isFetching: false
                     } );
    }
  };

  render() {
    return (
        <button onClick={this.createTask}>
          CREATE TASK
        </button>
    );
  }
}

TaskList.propTypes = {};

export default TaskList;