import React from 'react';
import Header from 'components/Header';
import FormInput from 'components/FormInput';
import logo from 'assets/images/Avantica-logo.png';

function App() {
  const headerProps = {
    logo,
    slogan: 'Empower your searching tools',
  };
  return (
    <main data-test="main-app" id="main-app">
      <Header {...headerProps} />
      <FormInput />
    </main>
  );
}

export default App;
