import React from 'react';
import User from './User';

const UsersList = ({ users }) => {
    return (
        <div className='bg-danger'>
            {users && users.map((user) => <User key={user.login.uuid} {...user} />)}
        </div>
    )
}

export default UsersList;