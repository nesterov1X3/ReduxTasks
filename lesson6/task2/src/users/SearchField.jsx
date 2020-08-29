import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions.js';
import PropTypes from 'prop-types';

class SearchField extends React.Component {
    state = { 
        userName: ''
    }
    onChange = event => {
        this.setState({userName:event .target.value})
    }
    handleUserSearch = () => {
        this.props.showSpinner()
        this.props.fetchUserData(this.state.userName)
    }
    render() {
        return (
            <div className="name-form">
                <input value={this.state.userName} 
                onChange={this.onChange}
                 type="text"
                  className="name-form__input"/>
                <button onClick={this.handleUserSearch} className="name-form__btn btn">Show</button>
            </div>
        )
    };
};
SearchField.propTypes ={
    showSpinner: PropTypes.func.isRequired,
    userDataRecieved: PropTypes.func.isRequired,
    fetchUserData: PropTypes.func.isRequired,
}
const mapDispatch ={
    showSpinner: usersActions.showSpinner,
    userDataRecieved: usersActions.userDataRecieved,
    fetchUserData: usersActions.fetchUserData
}
export default connect(null, mapDispatch)(SearchField);