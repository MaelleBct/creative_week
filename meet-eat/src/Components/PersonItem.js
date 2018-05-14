import React from 'react';

const PersonItem = (name, email) => {
    return (
        <div>
            <h3>{name}</h3>
            <h3>{email}</h3>
        </div>
    )
}

export default PersonItem;