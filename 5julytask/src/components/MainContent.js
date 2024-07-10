import React from 'react';
import '../css/MainContent.css'
import Overview from './Overview';
import FormComponent from './FormComponent';

const MainContent = () => {
  return (
    <main className="main-content">
      <Overview/>
      <FormComponent/>
    </main>
  );
};

export default MainContent;
