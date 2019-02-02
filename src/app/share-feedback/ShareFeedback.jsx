import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import UserList from './UserList';
import {
    FeedbackWizard,
    FeedbackThankYou } from './feedback-wizard';

const StyledFeedback = styled.section`
    display: flex;
    justify-content: center;

    .wrapper {
        display: flex;
        flex-direction: column;
        width: 780px;
    }
`;

const ShareFeedback = (props) => {
    const feedback = JSON.parse(localStorage.getItem('feedback'));
    const allFeedbackUsers = [
        ...feedback.todo,
        ...feedback.completed
    ];

    return (
        <StyledFeedback className="share-feedback">
            <div className="wrapper">
                <Switch>
                    <Route
                        path={props.match.path}
                        exact={true}
                        render={() => {
                            return (
                                <div className="feedback-users">
                                    <h1>Share Feedback</h1>
                                    <UserList users={allFeedbackUsers} />
                                </div>
                            );
                        }}
                    />
                    <Route path={`${props.match.path}/thank-you`} exact={true} render={(routeProps) => <FeedbackThankYou routeProps={routeProps} />} />
                    <Route path={`${props.match.path}/:userId`} exact={true} render={(routeProps) => <FeedbackWizard routeProps={routeProps} />} />
                </Switch>
            </div>
        </StyledFeedback>
    );

};

ShareFeedback.propTypes = {
    match: PropTypes.object
};

export default ShareFeedback;
