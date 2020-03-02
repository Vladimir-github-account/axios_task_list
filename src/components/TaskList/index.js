import React, { Component }         from 'react';
import { createTask, getUserTasks } from '../../api';

class TaskList extends Component {
  constructor(props) {
    super( props );
    this.state = {
      isFetching: false,
      value: '',
      deadline: '',
      tasks: [],
      error: null,
    };
  }

  async componentDidMount() {
    this.setState( {
      isFetching: true,
    } );
    const { data } = await getUserTasks();
    this.setState( {
      tasks: data,
    } );
  }

  createTask = async (e) => {
    e.preventDefault();
    try {
      this.setState( {
        isFetching: true,
      } );
      const { data } = await createTask( {
        value: this.state.value,
        isDone: this.state.isDone,
        deadline: this.state.deadline,
        userId: 1
      } );
      console.log( data );
      console.log( this.state.tasks );
      this.setState( {
        tasks: [ data, ...this.state.tasks ],
      } );
    } catch (e) {
      this.setState( {
        error: `${e.response}`
      } );
    } finally {
      this.setState( {
        isFetching: false
      } );
    }
  };

  handleValueChange = (e) => {
    const { name, type } = e.target;
    this.setState( {
      [name]: type === 'checkbox'
          ? e.target.checked
          : e.target.value
    } );
  };

  render() {
    const { tasks, isFetching, error, value, deadline, isDone } = this.state;
    return (
        <div>
          <form onSubmit={this.createTask}>
            <label>
              <span>Task value</span>
              <input type="text"
                     name='value'
                     onChange={this.handleValueChange}
                     value={value}/>
            </label>
            <label>
              <span>Deadline:</span>
              <input type="date"
                     name='deadline'
                     onChange={this.handleValueChange}/>
            </label>
            <label>
              <span>Is done?:</span>
              <input onChange={this.handleValueChange}
                     name='isDone'
                     type="checkbox"/>
            </label>
            <input type='submit' value='CREATE TASK'/>
          </form>
          {isFetching && <h3>Loading...</h3>}
          <ul>
            {
              tasks.map( item => (
                  <li>{`${item.value} ${item.deadline} is done ${item.isDone}`}</li>
              ) )
            }
          </ul>
        </div>
    );
  }
}

export default TaskList;