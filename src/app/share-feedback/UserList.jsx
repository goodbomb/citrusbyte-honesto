import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserListItem from './UserListItem';

const StyledUserList = styled.ul`
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    margin: 0;
    padding: 0;
`;

const UserList = props => {
    return (
        <StyledUserList className="user-list">
            {props.users.map((user) =>
                <UserListItem key={user.id} user={user} />
            )}
        </StyledUserList>
    );
};

UserList.propTypes = {
    users: PropTypes.array
};

export default UserList;
