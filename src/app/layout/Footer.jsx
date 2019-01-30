import React from 'react';
import styled from 'styled-components';
import { palette } from 'theme';

const StyledFooter = styled.section`
    background-color: ${palette.primaryTextColor};
    bottom: 0;
    color: ${palette.accentTextColor};
    font-size: 12px;
    position: absolute;
    width: 100%;

    .footer-inner {
        align-items: center;
        display: flex;
        height: 54px;
    }

    .footer-right {
        margin-left: auto;
        text-align: right;
    }
`;

const Footer = function() {

    return (
        <StyledFooter className="footer">
            <div className="footer-inner container">
                <div className="footer-left" />
                <div className="footer-right">Copyright © 2018 Theorem, LLC. All Rrights Reserved.</div>
            </div>
        </StyledFooter>
    );

};

export default Footer;
