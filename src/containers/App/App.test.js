import React from 'react';
import { shallow } from 'enzyme';
import Component from './App';
import { testStore } from 'utils/test';
import { Provider } from 'react-redux';
describe('Initializing App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={testStore()}>
        <Component />
      </Provider>
    );
  });

  it('it renders with out crashing', () => {
    expect(wrapper.find(Component).length).toBe(1);
  });
});
