import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'theme';

const StyledUserListItem = styled.li`
    align-items: center;
    border-bottom: solid 1px ${palette.borderColor};
    display: flex;
    list-style: none;
    margin: 0;
    padding: 16px 20px;

    &:hover {
        background-color: rgba(213, 176, 242, 0.1);
    }

    .avatar {
        margin-right: 30px;
        width: 58px;

        img {
            border-radius: 99px;
            height: 58px;
        }
    }

    button {
        margin-left: auto;
    }
`;

const StyledName = styled.div`
    ${StyledUserListItem}:hover & {
        color: #031323;
    }
`;

const UserListSidebarItem = ({ user }) => {

    const defaultAvatar = 'https://www.cansolveckd.ca/wp-content/uploads/2018/07/generic-avatar.png';

    return (
        <StyledUserListItem>
            <div className="avatar">
                <img src={user.avatar || defaultAvatar} alt="user avatar" />
            </div>
            <StyledName className="name">{user.name}</StyledName>
        </StyledUserListItem>
    );
};

UserListSidebarItem.propTypes = {
    user: PropTypes.object
};

export default UserListSidebarItem;
