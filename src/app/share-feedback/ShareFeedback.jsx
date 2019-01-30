import React, { Component } from 'react';
import styled from 'styled-components';
import UserList from './UserList';

const StyledFeedback = styled.section`
    display: flex;
    justify-content: center;

    .wrapper {
        display: flex;
        flex-direction: column;
        width: 780px;
    }
`;

class ShareFeedback extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        };
    }

    static getDerivedStateFromProps(props, state) {
        const feedback = JSON.parse(localStorage.getItem('feedback'));

        if (feedback && !state.users.length) {
            const allFeedback = [
                ...feedback.todo,
                ...feedback.completed
            ];

            return {
                users: allFeedback
            };
        }

        return null;
    }

    render() {
        return (
            <StyledFeedback className="share-feedback">
                <div className="wrapper">
                    <h1>Share Feedback</h1>
                    <UserList users={this.state.users} />
                </div>
            </StyledFeedback>
        );

    }

}

export default ShareFeedback;
