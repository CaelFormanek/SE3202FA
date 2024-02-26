import './App.css';
import EmailPass from './EmailPass';
import ChooseVerification from './ChooseVerification';
import RootInfoPage from './RootInfoPage';
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
        <Route exact path="/" element={<EmailPass />} />
        <Route exact path="/verificationmethod" element={<ChooseVerification />} />
        <Route path="/rootinfo" element={<RootInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
