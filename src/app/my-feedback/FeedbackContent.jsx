import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FeedbackContentQuestion from './FeedbackContentQuestion';

const StyledContent = styled.div`
    border-left: 1px solid #d9dcde;

    h2 {
        border-bottom: 1px solid #d9dcde;
        margin: 0;
        padding: 20px;
    }
`;

const FeedbackContent = props => {
    return (
        <StyledContent>
            <h2>{props.feedback.name}'s Feedback</h2>
            {props.feedback.questions.map(question => <FeedbackContentQuestion key={question.id} question={question} />)}
        </StyledContent>
    );
};

FeedbackContent.propTypes = {
    feedback: PropTypes.object
};

export default FeedbackContent;
