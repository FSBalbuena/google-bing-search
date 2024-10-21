//TODO: TS re-write tests with RTL
// @ts-nocheck
import React from 'react';
import { shallow } from 'enzyme';
import Component from './';
import { findByTestAtrr } from 'utils/test';

describe('Initializing Header Component', () => {
  let wrapper;
  const dummy = 'dummy text';
  beforeEach(() => {
    wrapper = shallow(<Component text={dummy} />);
  });

  it('it renders with out crashing', () => {
    let message = findByTestAtrr(wrapper, 'ui-message');
    expect(message.length).toBe(1);
  });
  it('it has a text', () => {
    let message = findByTestAtrr(wrapper, 'ui-message');
    expect(message.contains(dummy)).toBe(true);
  });
});
