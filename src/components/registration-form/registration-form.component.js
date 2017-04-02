import React, {Component} from 'react';

import './registration-form.component.scss';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class RegistrationForm extends Component {
    state = {
        value: null,
    };

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
        <div>
            <div className="jumbotron">
                <div className="container">
                <h1 className="display-3">
                    Hello, world!
                </h1>
                <p className="lead">
                    This is a simple hero unit,
                    a simple jumbotron-style component
                    for calling extra attention
                    to featured content or information.
                </p>
                <hr className="m-y-md" />
                <p >
                    It uses utility classes for typography
                    and spacing to space content out
                    within the larger container.
                </p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#deadlink">
                    Learn more
                    </a>
                </p>
                </div>
            </div>
            <SelectField
            floatingLabelText="Ready?"
            value={this.state.value}
            onChange={this.handleChange}
            >
            <MenuItem value={null} primaryText="" />
            <MenuItem value={false} primaryText="No" />
            <MenuItem value={true} primaryText="Yes" />
            </SelectField>
        </div>
        );
    }

}