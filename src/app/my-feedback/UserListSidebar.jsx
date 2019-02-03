import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserListSidebarItem from './UserListSidebarItem';

const StyledUserList = styled.ul`
    margin: 0;
    padding: 0;

    .sidebar-title {
        border-bottom: solid 1px #d9dcde;
        color: #59636e;
        font-size: 12px;
        letter-spacing: 0.15em;
        padding: 12px;
        text-transform: uppercase;
    }
`;

const UserListSidebar = ({ users }) => {
    return (
        <StyledUserList className="user-list">
            <div className="sidebar-title">Feedback Received</div>
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
