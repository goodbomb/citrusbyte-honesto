import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Scale = styled.div`
    .scale {
        display: flex;
        margin-top: 50px;

        .option {
            background: #f2f3f4;
            border: 2px solid #ffffff;
            box-sizing: border-box;
            height: 75px;
            width: 75px;

            &:hover, &.selected, &.hovered {
                background: #ab61e5;
                cursor: pointer;
            }

            &.not-hovered {
                background: #f2f3f4;
            }
        }
    }

    .rank {
        margin: 10px 0 50px;
        text-align: right;
    }
`;

class RankScaleForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hoveredItem: props.questionData.value,
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
        const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        return (
            <Scale>
                <div className="description">{this.props.questionData.description}</div>
                <div className="scale">
                    {options.map((option) => {
                        const selected = option <= this.state.selection;
                        const hovered = option <= this.state.hoveredItem;
                        const notHovered = option > this.state.hoveredItem;

                        return (
                            <div
                                key={option}
                                className={`option ${option}${selected || hovered ? ' hovered' : ''}${notHovered ? ' not-hovered' : ''}`}
                                onClick={() => {
                                    this.setState({ selection: option });
                                    this.saveOption(option);
                                    this.props.updateAnsweredState();
                                }}
                                onMouseEnter={() => {
                                    this.setState({ hoveredItem: option });
                                }}
                                onMouseLeave={() => {
                                    this.setState({ hoveredItem: this.state.selection });
                                }}
                            />
                        );
                    })}
                </div>
                <div className="rank">
                    {this.state.hoveredItem || this.state.selection} / {options.length}
                </div>
            </Scale>
        );
    }

}

RankScaleForm.propTypes = {
    questionData: PropTypes.object,
    questionIndex: PropTypes.number,
    user: PropTypes.object,
    updateAnsweredState: PropTypes.func
};

export default RankScaleForm;
