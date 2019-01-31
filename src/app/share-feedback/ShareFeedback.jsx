import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import UserList from './UserList';
import { FeedbackWizard } from './feedback-wizard';

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
                    <Route
                        path={this.props.match.path}
                        exact={true}
                        render={() => {
                            return (
                                <div className="feedback-users">
                                    <h1>Share Feedback</h1>
                                    <UserList users={this.state.users} />
                                </div>
                            );
                        }}
                    />
                    <Route path={`${this.props.match.path}/:userId`} render={(routeProps) => <FeedbackWizard routeProps={routeProps} />} />
                </div>
            </StyledFeedback>
        );

    }

}

ShareFeedback.propTypes = {
    match: PropTypes.object
};

export default ShareFeedback;
