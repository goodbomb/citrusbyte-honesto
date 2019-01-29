import React from 'react';
import styled from 'styled-components';
import { palette } from 'theme';

const StyledHeader = styled.section`
    align-items: center;
    background-color: ${palette.accentColor};
    display: flex;
    height: 100px;
    justify-content: center;
`;

const Header = function() {
    return (
        <StyledHeader className="header">
            Honesto
        </StyledHeader>
    );
};

export default Header;
