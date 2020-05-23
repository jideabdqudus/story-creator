import React from 'react';
import './App.css';
import NavbarCard from './components/Navbar/NavbarCard';
import HeaderCard from './components/Header/HeaderCard';
import FormCard from './components/Form/FormCard';

function App() {
  return (
    <div className="App">
      <NavbarCard/>
      <HeaderCard/>
      <FormCard/>
    </div>
  );
}

export default App;
