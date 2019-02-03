import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from 'theme';

const StyledUserListItem = styled.li`
    align-items: center;
    border-bottom: solid 1px ${palette.borderColor};
    display: flex;
    list-style: none;
    margin: 0;
    padding: 14px 20px;

    &:hover {
        background-color: #fbf7fe;
        cursor: pointer;
    }

    &.active {
        background-color: #f2f3f4;
    }

    .avatar {
        margin-right: 30px;
        width: 58px;

        img {
            border-radius: 99px;
            height: 58px;
            width: 58px;
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

const UserListSidebarItem = ({ user, match, history }) => {

    const defaultAvatar = 'https://www.cansolveckd.ca/wp-content/uploads/2018/07/generic-avatar.png';
    const isActive = match.params.userId === user.id;

    return (
        <StyledUserListItem
            className={`list-item ${isActive ? 'active' : ''}`}
            onClick={() => history.push(`/my-feedback/${user.id}`)}
        >
            <div className="avatar">
                <img src={user.avatar || defaultAvatar} alt="user avatar" />
            </div>
            <StyledName className="name">{user.name}</StyledName>
        </StyledUserListItem>
    );
};

UserListSidebarItem.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    user: PropTypes.object
};

export default withRouter(UserListSidebarItem);
