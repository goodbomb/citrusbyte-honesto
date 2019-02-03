import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserListSidebarItem from './UserListSidebarItem';

const StyledUserList = styled.ul`
    margin: 0;
    padding: 0;
`;

const UserListSidebar = ({ users }) => {
    return (
        <StyledUserList className="user-list">
            {users.map((user) =>
                <UserListSidebarItem key={user.id} user={user} />
            )}
        </StyledUserList>
    );
};

UserListSidebar.propTypes = {
    users: PropTypes.array
};

export default UserListSidebar;
