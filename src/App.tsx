import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { ForumPage } from './pages/forum';
import { HomePage } from './pages/home';
import { UploadPage } from './pages/upload';
import { AcademyPage } from './pages/academy';


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

      <Route 
        path='/upload'
        element={
          <UploadPage/>
        }
      />

      <Route 
        path='/notas'
        element={
          <AcademyPage/>
        }
      />

      

      
    </Routes>
  );
}

export default App;
