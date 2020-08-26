import React, { Component } from 'react';
import User from './User.jsx';
import Filter from '../Filter.jsx';
import { connect } from 'react-redux'
import { userFilter } from './user.action.js'
import { usersSelectorUserList, usersSelectorFilterText } from './users.selectors.js'


const UsersList = ({ users, filterText, filterUserChange }) => {


    const filterUsers = () =>
        users.filter((user) =>
            user.name.toUpperCase().includes(filterText.toUpperCase())
        );

    const onChange = (e) => {
        filterUserChange(e.target.value)
    };

    return (
        <>
            <div>{filterUsers().map(user => (
                <User key={user.id} {...user} />
            ))
            }</div>

            <Filter
                count={filterUsers().length}
                onChange={onChange}
                filterText={filterText}
            />
        </>
    )
}


const mapState = state => {
    return {
        users: usersSelectorUserList(state),
        filterText: usersSelectorFilterText(state)
    }
}
const mapDispatch = {
    filterUserChange: userFilter
}
export default connect(mapState, mapDispatch)(UsersList)