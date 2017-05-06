import React from 'react';
import { expect } from 'chai'; 
import { shallow } from 'enzyme'; 

import  RegistrationForm from './registration-form.container'; 

describe('<ToolHeader/>', function () { 
    let wrapper; 
    beforeEach(() => { 
        wrapper = shallow(<RegistrationForm />);
    });
    
    it('has a single wrapper element', () => { 
        expect();
    }); 
});