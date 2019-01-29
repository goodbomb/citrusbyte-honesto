import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContent = styled.section`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100px;
    padding: 60px 40px 100px;
`;

const Content = function(props) {
    return (
        <StyledContent className="main">
            {props.children}
        </StyledContent>
    );
};

Content.propTypes = {
    children: PropTypes.object
};

export default Content;
