//TODO: TS re-write tests with RTL
// @ts-nocheck
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
    let app = findByTestAtrr(wrapper, 'header');
    expect(app.length).toBe(1);
  });
  it('it has a logo', () => {
    let app = findByTestAtrr(wrapper, 'logo');
    expect(app.length).toBe(1);
  });
  it('it has a slogan', () => {
    let app = findByTestAtrr(wrapper, 'slogan');
    expect(app.length).toBe(1);
  });
});
