import './App.css';
import EmailPass from './EmailPass';
import ChooseVerification from './ChooseVerification';
import RootInfoPage from './RootInfoPage';
import AccountLinked from './AccountLinked';
import CloudBoard from './CloudBoard';
import FakeRootInfoPage from './FakeRootInfoPage';
import LogOutPage from './LogOutPage';
import AccountPage from './AccountPage';
import AboutUsPage from './AboutUs';
import ContactTeamMember from './ContactTeamMember';
import DeleteVerification from './DeleteVerification';

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
        <Route path="/accountlinked" element={<AccountLinked />} />
        <Route path="/cloudboard" element={<CloudBoard />} />
        <Route path="/fakerootinfo" element={<FakeRootInfoPage />} />
        <Route path="/logout" element={<LogOutPage />} />
        <Route path="/accountPage" element={<AccountPage />} />
        <Route path="/aboutUsPage" element={<AboutUsPage />} />
        <Route path="/contactTeamMember" element={<ContactTeamMember />} />
        <Route path="/deleteVerification" element={<DeleteVerification />} />
      </Routes>
    </Router>
  );
}

export default App;
