import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
    border: 1px solid #d9dcde;
    border-radius: 3px;
    box-sizing: border-box;
    height: 230px;
    padding: 20px;
    width: 100%;
`;

class FreeForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    /**
     * Saves the value to the localStorage feedback object.
     *
     * @param  {string}  newValue [The question value to save.]
     * @return {undefined}
     */
    saveOption(newValue) {
        const feedbackData = JSON.parse(localStorage.getItem('feedback'));
        const userIndex = feedbackData.todo.findIndex((item) => {
            return item.id === this.props.user.id;
        });

        const newQuestionObj = Object.assign({}, this.props.questionData);
        const newUserObj = Object.assign({}, this.props.user);
        const newfeedbackObj = Object.assign({}, feedbackData);

        newQuestionObj.value = newValue;
        newUserObj.questions[this.props.questionIndex] = newQuestionObj;
        newfeedbackObj.todo[userIndex] = newUserObj;

        localStorage.setItem('feedback', JSON.stringify(newfeedbackObj));
    }

    render() {
        return (
            <StyledTextarea
                onChange={(event) => {
                    this.setState({ value: event.target.value });
                    this.saveOption(event.target.value);
                }}
                placeholder="Say something..."
            />
        );
    }

}

FreeForm.propTypes = {
    questionData: PropTypes.object,
    questionIndex: PropTypes.number,
    user: PropTypes.object
};

export default FreeForm;
