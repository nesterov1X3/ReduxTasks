import React from 'react';


class CreateTaskInput extends React.Component {
    state = {
        value: '',
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    handleTaskCreate = () => {
        this.props.onCreate(this.state.value)
        this.setState({value: ''})
    }

    render() {
        return (
            <div className="create-task">
                <input type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="create-task__input" />

                <button className=" btn create-task__btn" onClick={this.handleTaskCreate}>Create</button>
            </div>
        );
    }
};


export default CreateTaskInput;



// take textfrom input
// create task with text
//add created task to the list