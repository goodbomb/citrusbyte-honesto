import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Options = styled.div`
    .option {
        background: #f2f3f4;
        border-radius: 3px;
        margin-bottom: 10px;
        padding: 20px 30px;

        &:hover, &.selected {
            background: #59636e;
            color: #ffffff;
            cursor: pointer;
        }
    }
`;

class MultipleChoiceForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selection: props.questionData.value
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
            <Options>
                {this.props.questionData.options.map((option) => {

                    const selected = option.score === this.state.selection;

                    return (
                        <div
                            key={option.score}
                            className={`option ${option.score}${selected ? ' selected' : ''}`}
                            onClick={() => {
                                this.setState({ selection: option.score });
                                this.saveOption(option.score);
                                this.props.updateAnsweredState();
                            }}
                        >
                            <div className="option-title">{option.title}</div>
                            <div className="option-message">{option.message}</div>
                        </div>
                    );
                })}
            </Options>
        );
    }

}

MultipleChoiceForm.propTypes = {
    questionData: PropTypes.object,
    questionIndex: PropTypes.number,
    user: PropTypes.object,
    updateAnsweredState: PropTypes.func
};

export default MultipleChoiceForm;
