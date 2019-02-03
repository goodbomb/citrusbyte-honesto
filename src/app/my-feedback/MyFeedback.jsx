import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter, Route, Redirect } from 'react-router-dom';
import UserListSidebar from './UserListSidebar';
import FeedbackContent from './FeedbackContent';

const StyledFeedback = styled.section`
    .wrapper {
        background: #ffffff;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
        display: flex;

        .sidebar {
            width: 33%;
        }

        .content {
            width: 67%;
        }
    }
`;

const MyFeedback = (props) => {

    const feedback = JSON.parse(localStorage.getItem('feedback'));
    const currentUserFeedback = feedback.completed.filter(user => {
        return user.id === props.match.params.userId;
    })[0];

    return (
        <StyledFeedback className="my-feedback">
            <h1>My Feedback</h1>
            <div className="wrapper">
                <div className="sidebar">
                    <UserListSidebar users={feedback.completed} />
                </div>
                <div className="content">
                    {!props.match.params.userId
                        && feedback.completed.length
                        && props.location.pathname !== `/my-feedback/${feedback.completed[0].id}`
                        ? <Redirect to={`/my-feedback/${feedback.completed[0].id}`} /> : null
                    }
                    <Route
                        path={`${props.match.path}/:userId`}
                        exact={true}
                        render={(routeProps) => <FeedbackContent feedback={currentUserFeedback} routeProps={routeProps} />}
                    />
                </div>
            </div>
        </StyledFeedback>
    );

};

MyFeedback.propTypes = {
    location: PropTypes.object,
    match: PropTypes.object
};

export default withRouter(MyFeedback);
