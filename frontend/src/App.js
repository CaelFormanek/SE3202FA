import './App.css';
import RootInfoPage from './RootInfoPage';
import ChooseVerification from './ChooseVerification';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ChooseVerification />} />
        <Route path="/rootinfo" element={<RootInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
