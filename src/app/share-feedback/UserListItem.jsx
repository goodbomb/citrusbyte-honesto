import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
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

const UserListItem = ({ user, history }) => {

    const defaultAvatar = 'https://www.cansolveckd.ca/wp-content/uploads/2018/07/generic-avatar.png';

    if (user) {
        return (
            <StyledUserListItem>
                <div className="avatar">
                    <img src={user.avatar || defaultAvatar} alt="user avatar" />
                </div>
                <StyledName className="name">{user.name}</StyledName>
                {user.complete
                    ? <button
                        className="view-submission secondary"
                        onClick={() => {
                            history.push('/my-feedback');
                        }}
                    >
                        View Submission
                    </button>
                    : <button
                        className="fill-out primary"
                        onClick={() => {
                            history.push(`/share-feedback/${user.id}`);
                        }}
                    >
                        Fill Out
                    </button>
                }
            </StyledUserListItem>
        );
    }

    return <div />;
};

UserListItem.propTypes = {
    history: PropTypes.object,
    user: PropTypes.object
};

export default withRouter(UserListItem);
