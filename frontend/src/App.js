import './App.css';
import EmailPass from './EmailPass';
import ChooseVerification from './ChooseVerification';
import RootInfoPage from './RootInfoPage';
import AccountLinked from './AccountLinked';
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
        <Route path="/AccountLinked" element={<AccountLinked />} />
      </Routes>
    </Router>
  );
}

export default App;
