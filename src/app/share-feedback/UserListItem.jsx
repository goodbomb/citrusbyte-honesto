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
    font-size: 22px;

    ${StyledUserListItem}:hover & {
        color: #031323;
    }
`;

const UserListItem = ({ user }) => {
    return (
        <StyledUserListItem>
            <div className="avatar">
                <img src={user.avatar} alt="user avatar" />
            </div>
            <StyledName className="name">{user.name}</StyledName>
            {user.submission.complete
                ? <button className="view-submission secondary">View Submission</button>
                : <button className="fill-out primary">Fill Out</button>
            }
        </StyledUserListItem>
    );
};

UserListItem.propTypes = {
    user: PropTypes.object
};

export default UserListItem;
