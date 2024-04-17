import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InputScreen from './pages/InputScreen';
import ResultScreen from './pages/ResultScreen';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InputScreen/>} />
        <Route path="/result/:string" element={<ResultScreen/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;