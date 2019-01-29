import React from 'react';
import styled from 'styled-components';

const StyledFeedback = styled.section`
    display: flex;
`;

const MyFeedback = function() {
    return (
        <StyledFeedback className="my-feedback">
            <h1>My Feedback</h1>
        </StyledFeedback>
    );
};

export default MyFeedback;
