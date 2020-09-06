import React from 'react';
import Task from '../../Task';
import CreateTaskInput from './CreateTaskInput.jsx';
import {connect} from 'react-redux';
import { createTask, fetchTasksList, updatedTask, deleteTask } from '../tasksGateway.js'
import * as tasksAction  from '../tasks.actions.js';
import PropTypes from 'prop-types';
import {taskListSelector}  from './tasks.selector.js'
 

class TasksList extends React.Component {
    // state = {
    //     tasks: [],
    // }

    componentDidMount() {
        this.props.getTasksList()
    }

    // hetchTasks = () => {
    //     fetchTasksList()
    //         .then(tasksList =>
    //             this.setState({
    //                 tasks: tasksList
    //             }),
    //         );
    // };


    //CREATE!!!!!!!
    onCreate = text => {
        const newTask = {
            text,
            done: false
        }

        createTask(newTask)
            .then(() => this.props.getTasksList())

        // const updatedTasks = tasks.concat(newTask)
        // this.setState({ tasks: updatedTasks });
    }


    //UPDATE!!!!!!!!!!!
    handleTaskStatusChange = id => {
        // find tasks in a list 
        // toggle done value
        // save updated list

        const { done, text } = this.props.tasks.find(task => task.id === id)
        const upTask = {
            ...text,
            done: !done
        };

        updatedTask(id, upTask)
            .then(() => this.props.getTasksList())

            
    };
    //DELETE!!!!!!!!!!
    handleTaskDelete = id => {
        deleteTask(id)
        .then(() => this.props.getTasksList())
        
    };


    render() {
        const sortedList = this.props.tasks
            .slice()
            .sort((a, b) => a.done - b.done)
        return (
            <div className="todo-list">
                <CreateTaskInput onCreate={this.onCreate} />
                <ul className="list">
                    {sortedList.map(task => (
                        <Task
                            key={task.id}
                            {...task}
                            onDelete={this.handleTaskDelete}
                            onChange={this.handleTaskStatusChange}
                        />
                    ))}

                </ul>
            </div>
        )
    }
}
TasksList.propTypes ={
    getTasksList: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape()),
}

const mapState = state => {
    return {
        tasks: taskListSelector(state)
    }
}

const mapDispatch = {
    getTasksList: tasksAction.getTasksList
}
export default connect(mapState, mapDispatch)(TasksList);