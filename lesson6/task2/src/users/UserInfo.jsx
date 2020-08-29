import React from 'react';
import { isFetchingSelector, userDataSelector } from './users.selectors.js';
import { connect } from 'react-redux';
import Spinner from './Spinner.jsx';
import PropTypes from 'prop-types';

const UserInfo = ({ userData, isFetching }) => {
    if (isFetching) {
        return <Spinner />
    }
    if (!userData) {
        return null
    }
    return (
        <div className="user">
            <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
            <div className="user__info">
                <span className="user__name">{userData.name}</span>
                <span className="user__location">{userData.location}</span>
            </div>
        </div>
    );
};
const mapState = state => {
    return {
        isFetching: isFetchingSelector(state),
        userData: userDataSelector(state),
    }
}

UserInfo.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    userData: PropTypes.shape()
}
UserInfo.defaultValue = {
    userData: null
}
export default connect(mapState)(UserInfo);