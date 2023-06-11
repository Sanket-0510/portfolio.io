import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contactme from './components/Contactme';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
        <Route exact path="/contactme" element={<Contactme></Contactme>}></Route>
         <Route exact path='/' element={<Home></Home>}></Route>
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
