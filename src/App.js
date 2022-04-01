import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './conponents/nav';
import Home from './pages/Home.tsx';
import React from 'react';
const App = () => {
  return (
    <div className="App">
      <NavComponent />
      <Home />
    </div>
  );
};

export default App;
