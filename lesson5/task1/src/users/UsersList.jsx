import React from 'react';
import User from './Users.jsx';
import Pagination from './Pagination.jsx';

import * as userActions from './user.actions.js';
import { connect } from 'react-redux';
import { usersListSelector, currentPageSelector} from './user.selectors.js'



class UsersList extends React.Component {
 
  render() {
    const itemsPerPage = 3
    const { users, currentPage, goNext, goPrev  } = this.props;

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    const usersToShow = users.slice(startIndex, endIndex)


    return (
      <div>
        <Pagination
          goNext={goNext}
          goPrev={ goPrev}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={users.length}
        />

        <ul className="users">
          {usersToShow.map(user => (
            <User key={user.id} {...user} />
          ))
          }

        </ul>
      </div >
    )
  }
}
const mapState = state => {
  return {
    users: usersListSelector(state),
    currentPage: currentPageSelector(state)
  }
}

const mapDispatch = {
  goPrev: userActions.goPrev,
  goNext: userActions.goNext
}


const connector = connect(mapState, mapDispatch)

const ConnectedUsers = connector(UsersList)

export default ConnectedUsers;
// export default UsersList;