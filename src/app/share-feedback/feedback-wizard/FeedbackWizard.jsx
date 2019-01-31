/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    FeedbackThankYou,
    FreeForm,
    MultipleChoiceForm,
    RankScaleForm
} from './';

class FeedbackWizard extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        const userId = this.props.routeProps.match.params.userId;
        const todoList = JSON.parse(localStorage.getItem('feedback')).todo;
        const userData = todoList.filter(user => {
            return user.id === userId;
        })[0];

        this.setState({
            userData
        });
    }

    /**
     * Renders the appropriate form based on the supplied props.
     *
     * @param  {string}  formType [The type of form to render]
     * @return {element}          [The form to render]
     */
    renderForm(formType) {
        switch (formType) {
            case 'multiple-choice':
                return <MultipleChoiceForm />;
            case 'rank-scale':
                return <RankScaleForm />;
            case 'free-form':
                return <FreeForm />;
            default:
                return <FeedbackThankYou />;
        }
    }

    render() {
        console.log(this.state);

        return (
            <div className="wizard">
                <div className="feedback-title">{this.props.title}</div>
                <div className="wizard-container">
                    <div className="feedback-form">{this.renderForm(this.props.formType)}</div>
                    <div className="wizard-buttons">Buttons</div>
                </div>
            </div>
        );
    }

}

FeedbackWizard.propTypes = {
    title: PropTypes.string,
    formType: PropTypes.string
};

export default FeedbackWizard;
