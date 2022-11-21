import React from 'react';

const User = ({ name, location, email, picture }) => {
    return (
        <div
            className='bg-primary my-4 py-5 d-flex flex-column align-items-center'
            style={{ 'borderRadius': '6px', 'margin': '0 12%' }}
        >
            <div className='user-image'>
                <img src={picture.medium} alt={name.first} />

            </div>
            <div className='user-details'>
                <div>
                    <strong>Name:</strong> {name.first} {name.last}
                </div>
                <div>
                    <strong>Country:</strong> {location.country}
                </div>
                <div>
                    <strong>Email:</strong> {email}
                </div>

            </div>

        </div>
    )
}

export default User;