import React, {Component} from 'react';
import {getUserTasks}     from '../../api';

class TaskList2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      tasks: [],
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
      const {tasks} = await getUserTasks();
      this.setState({
                      tasks
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
    const {tasks, isFetching} = this.state;
    return (
        <ol>
          {
            tasks.map(task => (
                <li key={task.id}>{task.value}</li>
            ))
          }
          {
            isFetching && <li>loading...</li>
          }
        </ol>
    );
  }
}

export default TaskList2;