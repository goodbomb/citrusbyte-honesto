import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import seedData from '../seedData.js';
import logo from '../../assets/images/honesto-logo.svg';

const seedAppData = () => {
    // Seed the application with mock data

    const currentUser = localStorage.getItem('currentUser');
    const feedback = localStorage.getItem('feedback');

    if (!currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(seedData.currentUser));
    }

    if (!feedback) {
        localStorage.setItem('feedback', JSON.stringify(seedData.feedback));
    }
};

const StyledLogin = styled.div`
    align-items: center;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    height: 380px;
    justify-content: center;
    left: 50%;
    margin: -230px 0 0 -190px;
    position: absolute;
    top: 50%;
    width: 380px;

    h1 {
        margin-bottom: 40px;
    }

    img {
        margin-bottom: 20px;
    }
`;

const LoginPage = (props) => {
    return (
        <StyledLogin>
            <img src={logo} height="70px" width="70px" />
            <h1>Honesto</h1>
            <button
                className="button primary"
                onClick={() => {
                    seedAppData();
                    localStorage.setItem('loggedIn', true);
                    props.history.push('/share-feedback');
                }}
            >
                Login
            </button>
        </StyledLogin>
    );
};

LoginPage.propTypes = {
    history: PropTypes.object
};

export default withRouter(LoginPage);
