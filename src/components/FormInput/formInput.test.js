import React from 'react';
import { shallow } from 'enzyme';
import Component from './';
import { findByTestAtrr } from 'utils/test';

describe('Initializing Header Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Component />);
  });

  it('it renders with out crashing', () => {
    let app = findByTestAtrr(wrapper, 'search-form');
    expect(app.length).toBe(1);
  });
  it('it has a search box', () => {
    let app = findByTestAtrr(wrapper, 'form-input-wrapper');
    expect(app.length).toBe(1);
  });
  it('it has a submit button', () => {
    let app = findByTestAtrr(wrapper, 'form-submit');
    expect(app.length).toBe(1);
  });
});
