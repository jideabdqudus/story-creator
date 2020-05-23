import React from 'react';
import './App.css';
import NavbarCard from './components/Navbar/NavbarCard';
import HeaderCard from './components/Header/HeaderCard';
import FormCard from './components/Form/FormCard';
import DashTable from './components/Dashboard/DashTable';
import StoriesCard from './components/Stories/StoriesCard';

function App() {
  return (
    <div className="App">
      <NavbarCard/>
      <HeaderCard/>
      <FormCard/>
      <DashTable/>
      <StoriesCard/>
    </div>
  );
}

export default App;
