import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { palette } from 'theme';

const StyledHeader = styled.section`
    align-items: center;
    background-color: ${palette.accentColor};
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    display: flex;
    height: 75px;
    justify-content: center;
`;

const NavBar = styled.nav`
    align-items: center;
    display: flex;
    font-size: 16px;
    height: 100%;
    justify-content: space-between;
    width: 100%;

    .logo {
        font-size: 24px;
        font-weight: bold;
        justify-self: start;
        margin-right: 40px;
    }

    .nav-menu {
        align-items: center;
        display: flex;
        font-weight: bold;
        height: 100%;

        .menu-item {
            align-items: center;
            display: flex;
            height: 100%;
            justify-content: center;
            margin: 0 40px;

            a {
                border-bottom: solid 3px transparent;
                padding: 30px 0 23px;

                &:visited {
                    color: ${palette.primaryTextColor};
                }

                &.active, &:hover {
                    border-bottom: solid 3px ${palette.primaryColor};
                }
            }
        }
    }

    .feedback-cycle {
        margin: 0 15px 0 auto;
        text-align: right;

        .label {
            color: #59636e;
            font-size: 11px;
            margin-bottom: 5px;
        }

        .feedback-date {
            .days-remaining {
                color: #21b7a2;
                font-weight: bold;
            }
        }
    }

    .user {
        align-items: center;
        border-left: 1px solid #d9dcde;
        display: flex;
        height: 100%;
        justify-content: center;

        .user-photo {
            align-items: center;
            background-color: #ffffff;
            border-radius: 99px;
            display: flex;
            height: 58px;
            justify-content: center;
            margin: 0 15px;
            overflow: hidden;
            width: 58px;

            .photo {
                height: 58px;
            }
        }

        .user-name {
            .logout {
                font-size: 12px;
                letter-spacing: 0.15em;
                text-transform: uppercase;
            }
        }
    }
`;

const Header = ({ user }) => {

    const defaultAvatar = 'https://www.cansolveckd.ca/wp-content/uploads/2018/07/generic-avatar.png';

    return (
        <StyledHeader className="header">
            <NavBar className="header-nav container">
                <div className="logo">Honesto</div>
                <div className="nav-menu">
                    <div className="menu-item">
                        <NavLink exact={true} to="/">Share Feedback</NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink to="/my-feedback">My Feedback</NavLink>
                    </div>
                    <div className="menu-item">Team Feedback</div>
                    <div className="menu-item">Teams</div>
                </div>
                <div className="feedback-cycle">
                    <div className="label">Next Feedback Cycle:</div>
                    <div className="feedback-date">
                        <div className="date">Feb 15 <span className="days-remaining">- 4 days</span></div>
                    </div>
                </div>
                <div className="user">
                    <div className="user-photo">
                        <img src={user ? user.avatar : defaultAvatar} alt="" className="photo" />
                    </div>
                    <div className="user-name">
                        <div className="name">{user ? user.name : ''}</div>
                        <a href="" className="logout">Logout</a>
                    </div>
                </div>
            </NavBar>
        </StyledHeader>
    );

};

Header.propTypes = {
    user: PropTypes.object
};

export default Header;
