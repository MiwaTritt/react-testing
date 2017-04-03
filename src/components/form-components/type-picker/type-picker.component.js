import React, {Component} from 'react';

import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


export default class TypePicker extends Component {
    render() {
        return (
            <div>
                <RadioButtonGroup name="typePickerRadioGroup" defaultSelected="euc">
                    <RadioButton
                        value="euc"
                        label="Simple"
                    />
                    <RadioButton
                        value="standaloneQuery"
                        label="Selected by default"
                    />
                </RadioButtonGroup>
            </div>
        );
    }
}