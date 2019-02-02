import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Content, Header, Footer } from './';
import seedData from '../seedData.js';
import background from '../../assets/images/login-background.svg';

const backgroundImage = JSON.parse(localStorage.getItem('loggedIn')) ? 'none;' : `url(${ background });`;
const StyledLayout = styled.div`
    background-size: cover;
    min-height: 100%;
    position: relative;

    /* stylelint-disable */
    ${props => !props.loggedIn && css`
        background-image: ${backgroundImage};
    `}
    /* stylelint-enable */
`;

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: seedData.currentUser,
            feedback: seedData.feedback
        };
    }

    componentDidMount() {
        // Seed the application with mock data

        const currentUser = localStorage.getItem('currentUser');
        const feedback = localStorage.getItem('feedback');

        this.setState({
            currentUser: JSON.parse(currentUser),
            feedback: JSON.parse(feedback)
        });

        if (!currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(seedData.currentUser));
        }

        if (!feedback) {
            localStorage.setItem('feedback', JSON.stringify(seedData.feedback));
        }
    }

    render() {
        const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));

        return (
            <StyledLayout className="layout" loggedIn={loggedIn}>
                {loggedIn ? <Header user={this.state.currentUser || seedData.currentUser} /> : null}
                <Content children={this.props.children} />
                <Footer />
            </StyledLayout>
        );
    }

}

Layout.propTypes = {
    children: PropTypes.object
};

export default Layout;
