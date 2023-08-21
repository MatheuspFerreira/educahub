import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { ForumPage } from './pages/forum';
import { HomePage } from './pages/home';


function App() {
  return (
    <Routes>
      <Route 
        path='/'
        element={
          <LoginPage/>
        }
      />

      <Route 
        path='/home'
        element={
          <HomePage/>
        }
      />

      <Route 
        path='/forum'
        element={
          <ForumPage/>
        }
      />

      
        
      
      
    </Routes>
  );
}

export default App;
