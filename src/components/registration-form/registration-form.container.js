import React, {Component} from 'react';

import './registration-form.container.scss';

import AccountFields from '../form-components/AccountFields';
import Confirmation from '../form-components/Confirmation';
import Success from '../form-components/Success';
import SurveyFields  from '../form-components/SurveyFields';
import assign from 'object-assign';

// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
var fieldValues = {
    name     : null,
    email    : null,
    password : null,
    age      : null,
    colors   : []
};

export default class RegistrationFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1
        };
        console.log(this.state.step);
    }

    saveValues = (field_value) => {
        return function() {
            fieldValues = assign({}, fieldValues, field_value);
        }.bind(this)();
    }

    nextStep = () => {
        this.setState({
            step : this.state.step + 1
        });
    }

    previousStep = () => {
        this.setState({
            step : this.state.step - 1
        });
    }

    submitRegistration = () => {
        // Handle via ajax submitting the user data, upon
        // success return this.nextStop(). If it fails,
        // show the user the error but don't advance

        this.nextStep();
    }

    showStep = () => {
        switch (this.state.step) {
            case 1:
                return <AccountFields fieldValues={fieldValues}
                                    nextStep={this.nextStep}
                                    previousStep={this.previousStep}
                                    saveValues={this.saveValues} />
            case 2:
                return <SurveyFields fieldValues={fieldValues}
                                    nextStep={this.nextStep}
                                    previousStep={this.previousStep}
                                    saveValues={this.saveValues} />
            case 3:
                return <Confirmation fieldValues={fieldValues}
                                    previousStep={this.previousStep}
                                    submitRegistration={this.submitRegistration} />
            case 4:
                return <Success fieldValues={fieldValues} />
        }
    }

    render() {
        var style = {
            width : (this.state.step / 4 * 100) + '%'
        };

        return (
        <main>
            <span className="progress-step">Step {this.state.step}</span>
            <progress className="progress" style={style}></progress>
            {this.showStep()}
        </main>
        );
    }
}