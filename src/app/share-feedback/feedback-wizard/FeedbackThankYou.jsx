import React from 'react';
import styled from 'styled-components';
import { UserList } from '../';

const ThankYou = styled.div`
    .thank-you-title {
        font-size: 31px;
        margin: 0;
    }

    .thank-you-subtitle {
        color: #59636e;
        font-size: 16px;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        width: 780px;
    }
`;

const FeedbackThankYou = () => {
    const feedbackData = JSON.parse(localStorage.getItem('feedback'));

    return (
        <ThankYou>
            <h2 className="thank-you-title">Thank you for sharing your feedback!</h2>
            <h3 className="thank-you-subtitle">Continue to give feedback to other team members.</h3>
            <div className="wrapper">
                <UserList users={feedbackData.todo} />
            </div>
        </ThankYou>
    );
};

export default FeedbackThankYou;
