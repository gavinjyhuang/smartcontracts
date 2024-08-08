import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: '#14161a',
          color: 'white',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
