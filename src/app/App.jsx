import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Routes } from './';
import { Layout } from 'app/layout';
import { createGlobalStyle } from 'styled-components';
import { palette } from 'theme';

const GlobalStyle = createGlobalStyle`
    html, body, .root-entry, .app-root {
        font-family: 'Open sans', sans-serif;
        font-size: 14px;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    h1 {
        font-size: 31px;
    }

    .container {
        padding: 0 40px;
    }

    button {
        height: 48px;
        min-width: 150px;
        outline: none;

        &:hover {
            cursor: pointer;
        }

        &:disabled {
            background-color: ${palette.canvasColor} !important;
            cursor: default;
        }

        &.primary {
            background-color: ${palette.primaryColor};
            border: solid 1px ${palette.primaryColor};
            border-radius: 4px;
            color: ${palette.accentTextColor};
            transition: background-color 0.25s, color 0.25s;

            &:hover {
                background-color: ${palette.canvasColor};
                color: ${palette.primaryColor};
            }

            &:disabled {
                background-color: #acb1b6 !important;
                border-color: #acb1b6 !important;
                color: ${palette.canvasColor} !important;
            }
        }

        &.secondary {
            background-color: ${palette.canvasColor};
            border: solid 1px ${palette.borderColor};
            border-radius: 4px;
            font-weight: bold;
            transition: background-color 0.25s;

            &:hover {
                background-color: #f2f3f4;
            }
        }
    }
`;

const App = function(props) {
    return (
        <div className="app-root">
            <GlobalStyle />
            <Helmet
                title="React Redux Webpack Starter"
                titleTemplate="MySite.com - %s"
                defaultTitle="My Default Title"
            />

            <Layout {...props}>
                {Routes.baseRoutes(props.match)}
            </Layout>
        </div>
    );
};

App.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
};

export default App;
