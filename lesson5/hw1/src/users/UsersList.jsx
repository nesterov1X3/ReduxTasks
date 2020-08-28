import React, { Component } from 'react';
import User from './User.jsx';
import Filter from '../Filter.jsx';
import { connect } from 'react-redux'
import { userFilter } from './user.action.js'
import { usersSelectorUserList, usersSelectorFilterText, filteredUsersSelector } from './users.selectors.js'


const UsersList = ({ users, filterText, filterUserChange }) => {


    // const filterUsers = () =>
    //     users.filter(user =>
    //         user.name.toLowerCase().includes(filterText.toLowerCase())
    //     );

    const onChange = (event) => {
        const filterTextEvent = event.target.value;
        filterUserChange(filterTextEvent)
    };

    return (
        <>
            <div>{users.map(user => (
                <User key={user.id} {...user} />
            ))
            }</div>

            <Filter
                count={users.length}
                onChange={onChange}
                filterText={filterText}
            />
        </>
    )
}


const mapState = state => {
    return {
        users: filteredUsersSelector(state),
        filterText: usersSelectorFilterText(state)
    }
}
const mapDispatch = {
    filterUserChange: userFilter
}
export default connect(mapState, mapDispatch)(UsersList)