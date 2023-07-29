import Header from './components/Header';
import Preload from './components/Preload';
import Form from './components/Form';

import { BrowserRouter,Link } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  return (
    <div id='container'>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={
      <Preload />
    }></Route>
    <Route path='/form' element={
      <Form type="register"  />
    }></Route>
    <Route path='/login' element={
      <Form type="login" />
    }></Route>
    </Routes>
    
    </BrowserRouter>
    
    </div>
  
  );
}

export default App;
