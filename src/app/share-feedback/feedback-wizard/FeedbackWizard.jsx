/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    FreeForm,
    MultipleChoiceForm,
    RankScaleForm
} from './';

const WizardForm = styled.div`
    .wizard-title-section {
        align-items: center;
        display: flex;

        .title-area {
            .question-title {
                font-size: 31px;
                margin: 0;
            }

            .question-subtitle {
                color: #acb1b6;
                font-size: 12px;
                letter-spacing: 0.15em;
                margin: 12px 0;
                text-transform: uppercase;
            }
        }

        .user-avatar {
            margin-left: auto;
            width: 58px;

            img {
                border-radius: 99px;
                height: 58px;
            }
        }
    }

    .wizard-container {
        background: #ffffff;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
        padding: 20px;
    }

    .wizard-buttons {
        display: flex;
        justify-content: space-between;
        margin: 36px 0;
    }

    .completed-questions {
        color: #031323;

        .label {
            font-size: 12px;
            font-weight: bold;
            letter-spacing: 0.15em;
            margin-bottom: 5px;
            text-transform: uppercase;
        }

        .status {
            font-size: 16px;
        }
    }
`;

class FeedbackWizard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentSlide: 0,
            userData: null,
            questionAnswered: false
        };
    }

    componentDidMount() {
        const userId = this.props.routeProps.match.params.userId;
        const todoList = JSON.parse(localStorage.getItem('feedback')).todo;
        const userData = todoList.filter(user => {
            return user.id === userId;
        })[0];

        this.setState({
            currentSlide: userData.currentQuestion,
            userData,
            questionAnswered: userData && userData.questions[this.state.currentSlide].value ? true : false
        });
    }

    updateAnsweredState = () => {
        this.setState({ questionAnswered: true });
    }

    /**
     * Renders the appropriate form based on the supplied props.
     *
     * @param  {string}  questionData [The question data object.]
     * @return {element}              [The form to render]
     */
    renderForm(questionData) {
        if (questionData) {
            switch (questionData.formType) {
                case 'multiple-choice':
                    return (
                        <MultipleChoiceForm
                            questionData={questionData}
                            questionIndex={this.state.currentSlide}
                            user={this.state.userData}
                            updateAnsweredState={this.updateAnsweredState}
                        />
                    );
                case 'rank-scale':
                    return (
                        <RankScaleForm
                            questionData={questionData}
                            questionIndex={this.state.currentSlide}
                            user={this.state.userData}
                            updateAnsweredState={this.updateAnsweredState}
                        />
                    );
                case 'free-form':
                default:
                    return (
                        <FreeForm
                            questionData={questionData}
                            questionIndex={this.state.currentSlide}
                            user={this.state.userData}
                        />
                    );
            }
        }
    }

    /**
     * Updates the slide that is currently visible.
     *
     * @param {number} newValue
     * @return {undefined}
     */
    navigateSlides(newValue) {
        const feedbackData = JSON.parse(localStorage.getItem('feedback'));
        const userIndex = feedbackData.todo.findIndex((item) => {
            return item.id === this.state.userData.id;
        });

        const newUserObj = Object.assign({}, this.state.userData);
        const newfeedbackObj = Object.assign({}, feedbackData);

        newUserObj.currentQuestion = newValue;
        newfeedbackObj.todo[userIndex] = newUserObj;

        localStorage.setItem('feedback', JSON.stringify(newfeedbackObj));
    }

    /**
     * Sets the user feedback to "complete" if on the final question.
     *
     * @return {undefined}
     */
    setFeedbackToComplete() {
        const feedbackData = JSON.parse(localStorage.getItem('feedback'));
        const userIndex = feedbackData.todo.findIndex((item) => {
            return item.id === this.state.userData.id;
        });

        if (feedbackData.todo[userIndex].questions.length === feedbackData.todo[userIndex].currentQuestion) {
            const newUserObj = Object.assign({}, feedbackData.todo[userIndex]);
            const newfeedbackObj = Object.assign({}, feedbackData);

            newUserObj.complete = true;
            newfeedbackObj.completed.push(newUserObj);

            // move user to completed array
            if (userIndex > -1) {
                newfeedbackObj.todo.splice(userIndex, 1);
            }

            localStorage.setItem('feedback', JSON.stringify(newfeedbackObj));

            this.props.routeProps.history.push('/share-feedback/thank-you');
        }
    }

    render() {
        const currentQuestion = this.state.currentSlide + 1;
        const user = this.state.userData;
        const numQuestions = user ? user.questions.length : 1;
        const questionData = user ? user.questions[this.state.currentSlide] : null;

        return (
            <WizardForm className="wizard">
                <div className="wizard-title-section">
                    <div className="title-area">
                        <h2 className="question-title">{questionData && questionData.title}</h2>
                        <h3 className="question-subtitle">Share your feedback for {user && user.name}</h3>
                    </div>
                    <div className="user-avatar">
                        <img src={user && user.avatar} alt="user avatar" />
                    </div>
                </div>
                <div className="wizard-container">
                    <div className="question-form">{this.renderForm(questionData)}</div>
                    <div className="wizard-buttons">
                        <button
                            className="previous secondary"
                            disabled={this.state.currentSlide === 0}
                            onClick={() => {
                                this.setState({ currentSlide: this.state.currentSlide - 1 });
                                this.navigateSlides(this.state.currentSlide - 1);
                            }}
                        >
                            Previous
                        </button>
                        <button className="previous secondary" disabled={true}>Skip</button>
                        <button
                            className="previous primary"
                            disabled={questionData && !questionData.value && questionData.formType !== 'free-form'}
                            onClick={() => {
                                this.setState({ currentSlide: this.state.currentSlide + 1});
                                this.navigateSlides(this.state.currentSlide + 1);
                                this.setFeedbackToComplete(); // only triggers on final question
                            }}
                        >
                            Next
                        </button>
                    </div>
                    <div className="completed-questions">
                        <div className="label">Questions Completed</div>
                        <div className="status">{currentQuestion}/{numQuestions}</div>
                    </div>
                </div>
            </WizardForm>
        );
    }

}

FeedbackWizard.propTypes = {
    routeProps: PropTypes.object
};

export default FeedbackWizard;
