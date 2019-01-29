import React from 'react';
import styled from 'styled-components';

const StyledFeedback = styled.section`
    display: flex;
`;

const ShareFeedback = function() {
    return (
        <StyledFeedback className="share-feedback">
            <h1>Share Feedback</h1>
        </StyledFeedback>
    );
};

export default ShareFeedback;
