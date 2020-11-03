import React from 'react';
import { shallow } from 'enzyme';
import Component from './';
import InputWrapper from './components/InputWrapper';
import SubmitButton from './components/SubmitButton';
import { findByTestAtrr, testStore } from 'utils/test';
import { Provider } from 'react-redux';
describe('Initializing Form Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Provider store={testStore()}>
        <Component isLoading={false} />
      </Provider>
    );
  });
  it('it renders with out crashing', () => {
    expect(wrapper.find(Component).length).toBe(1);
  });
});

describe('Initializing Input wrapper', () => {
  let wrapper;
  const props = {
    val: '',
    isLoading: false,
    handleChange: () => null,
    handleSearchEngine: () => null,
    searchType: [],
  };
  beforeEach(() => {
    wrapper = shallow(<InputWrapper {...props} />);
  });

  it('it has a submit button', () => {
    let app = findByTestAtrr(wrapper, 'form-input-wrapper');
    expect(app.length).toBe(1);
  });
});

describe('Initializing submit', () => {
  let wrapper;
  const props = {
    isLoading: false,
    submitText: '',
  };
  beforeEach(() => {
    wrapper = shallow(<SubmitButton {...props} />);
  });

  it('it has a submit button', () => {
    let app = findByTestAtrr(wrapper, 'form-submit');
    expect(app.length).toBe(1);
  });
});
