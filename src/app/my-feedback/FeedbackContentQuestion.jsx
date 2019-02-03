import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledQuestion = styled.div`
    border-bottom: 1px solid #d9dcde;
    display: flex;
    line-height: 22px;
    padding: 30px 25px;

    .question-title, .question-value {
        width: 50%;
    }

    .question-value {
        display: flex;
        margin-left: 20px;
    }

    &:last-child {
        border-bottom: none;
        flex-direction: column;

        .question-title {
            margin-bottom: 20px;
            width: 100%;
        }

        .question-value {
            margin-left: 0;
            width: 100%;
        }
    }
`;

const Box = styled.div`
    background-color: #f2f3f4;
    height: 28px;
    margin: 0 2px;
    /* stylelint-disable value-keyword-case */
    /* stylelint-disable order/properties-alphabetical-order */
    width: 28px;
    ${props => props.rankscale && css`
        width: 10%;
    `}

    ${props => props.multichoice && css`
        width: 33.33%;
    `}

    &.selected {
        background-color: #2bbf6a;
    }

    &.yellow {
        background-color: #f5dd07;
    }

    &.red {
        background-color: #de521d;
    }

    &.not-selected {
        background-color: #f2f3f4;
    }
`;

const renderValue = (question) => {
    let options = [];
    let red;
    let yellow;

    if (question.formType === 'multiple-choice') {
        options = [1, 2, 3];
        red = question.value <= 1;
        yellow = question.value <= 2;
    }

    if (question.formType === 'rank-scale') {
        options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        red = question.value <= 3;
        yellow = question.value <= 7;
    }

    if (question.formType === 'free-form') {
        return question.value;
    }

    return options.map((option) => {
        const selected = option <= question.value;
        const notSelected = option > question.value;

        return (
            <Box
                key={option}
                rankscale={true}
                className={
                    `option ${option}${selected ? ' selected' : ''}`
                    + ` ${notSelected ? 'not-selected' : ''}`
                    + ` ${red ? 'red' : ''}`
                    + ` ${yellow ? 'yellow' : ''}`
                }
            />
        );
    });
};

const FeedbackContentQuestion = props => {
    return (
        <StyledQuestion>
            <div className="question-title">
                {props.question.title}
            </div>
            <div className="question-value">
                {renderValue(props.question)}
            </div>
        </StyledQuestion>
    );
};

FeedbackContentQuestion.propTypes = {
    question: PropTypes.object
};

export default FeedbackContentQuestion;
