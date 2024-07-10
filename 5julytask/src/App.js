import React from 'react';
import Header from './components/Header';
import './App.css';
import MainContent from './components/MainContent';
import InformationComponent from './components/InformationComponent';
import Learn from './components/Learn'
import Lastingirmation from './components/Lastingirmation';
import LastInformation from './components/LastInformation';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <MainContent/>
      <InformationComponent/>
      <Learn/>
      <Lastingirmation></Lastingirmation>
      <LastInformation/>
      <Footer/>
    </div>
   
  );
}

export default App;
