import React from 'react';
import Header from 'components/Header';
import FormInput from 'components/FormInput';
import ResultList from 'components/ResultList';
import UiMessage from 'components/UiMessage';
import logo from 'assets/images/Avantica-logo.png';
import { useSelector } from 'react-redux';

function App() {
  const { isLoading, error, data } = useSelector(state => state.search);

  const headerProps = {
    logo,
    slogan: 'Empower your searching tools',
  };
  console.log(error);
  console.log(isLoading);
  const messageText = error || (isLoading ? 'Loading ...' : '');

  return (
    <main data-test="main-app" id="main-app">
      <Header {...headerProps} />
      <FormInput isLoading={isLoading} />
      <UiMessage text={messageText} isError={Boolean(error)} />
      <ResultList results={data} />
    </main>
  );
}

export default App;
