import React from 'react';
import { shallow } from 'enzyme';
import Component from './App';
import { findByTestAtrr } from '/utils/test';

describe('Initializing App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Component />);
  });

  it('it renders with out crashing', () => {
    let app = findByTestAtrr(wrapper, 'main-app');
    expect(app.length).toBe(1);
  });
});
