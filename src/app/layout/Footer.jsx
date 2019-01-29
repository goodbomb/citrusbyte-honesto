import React from 'react';
import styled from 'styled-components';
import { palette } from 'theme';

const StyledFooter = styled.section`
    align-items: center;
    background-color: ${palette.primaryTextColor};
    bottom: 0;
    color: ${palette.accentTextColor};
    display: flex;
    height: 54px;
    justify-content: center;
    position: absolute;
    width: 100%;
`;

const Footer = function() {
    return (
        <StyledFooter className="footer">
            Footer content
        </StyledFooter>
    );
};

export default Footer;
