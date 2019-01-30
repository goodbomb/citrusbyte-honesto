import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Content, Header, Footer } from './';
import seedData from '../seedData.js';

const StyledLayout = styled.div`
    min-height: 100%;
    position: relative;
`;

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: {
                id: null,
                name: '',
                avatar: ''
            },
            feedback: {}
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
        return (
            <StyledLayout className="layout">
                <Header user={this.state.currentUser} />
                <Content children={this.props.children} {...this.state} />
                <Footer />
            </StyledLayout>
        );
    }

}

Layout.propTypes = {
    children: PropTypes.object
};

export default Layout;
