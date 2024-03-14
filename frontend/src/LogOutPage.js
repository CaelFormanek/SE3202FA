import './LogOutPage.css'
import './CloudBoard.css';
import welcome from './Images/welcome.png';
import logoutIcon from './Images/logout.png';
import helpIcon from './Images/Help.png';
import menuIcon from './Images/Menu.PNG';
import aboutUsIcon from './Images/AboutUs.PNG';
import contactTeamMemberIcon from './Images/ContactTeamMember.PNG';
import setUpNetworkIcon from './Images/SetUpNetwork.PNG';
import createDatabaseIcon from './Images/CreateDatabase.PNG';
import deleteVerificationIcon from './Images/DeleteVerification.PNG';
import accountIcon from './Images/Account.PNG';
import homeIcon from './Images/Home.PNG';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function LogOutPage() {
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    // add logic here for two-factor authentication system
    setIsLoggedOut(true);
  };

  const handleReturnToLogin = () => {
    // You can add additional logic here before navigating back to the login page
    navigate('/rootinfo');
  };

  const handleMenuClick = () => {
  setIsMenuOpen(!isMenuOpen);
};





  return (

    <>
    <div className="CloudBoard">
      <div className='optionbar'>
        <img
          src={menuIcon}
          alt="Menu"
          className="menu-icon"
          onClick={handleMenuClick}
          />
        {isMenuOpen && (
          <div className="sidebar">
            {/* Add the content of the menu page here */}
            <Link to="/accountPage">
              <img src={accountIcon} alt="Account" className='account-link'/>
             </Link>
            <Link to="/deleteVerification">
              <img src={deleteVerificationIcon} alt="Delete Verification" className='delete-verification-link'/>
             </Link>
            {/* Add more menu items as needed */}
          </div>
        )}
      <Link to="/aboutUsPage">
        <img src={aboutUsIcon} alt="About Us" className="about-us-link"/>
      </Link>
      <Link to="/cloudboard" className="home-link">
      <img src={homeIcon} alt="Home" className='home-link'/>
      </Link>
      <Link to="/contactTeamMember">
        <img src={contactTeamMemberIcon} alt="Contact Team Member" className='contactteammember'/>
      </Link>
      <img src={setUpNetworkIcon} alt="Set Up Network" className='setupnetwork'/>
      <img src={createDatabaseIcon} alt="Create Database" className='createdatabase'/>
      <Link to="/logout">
            <img src={logoutIcon} alt="Logout" className="logout-image" />
          </Link>
      <Link to="/contactTeamMember#faq">
        <img src={helpIcon} alt="Help" className="help-image"/>
      </Link>
      </div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


    </div>

    <div className="LogOutPage">
      {isLoggedOut ? (
        <div>
          <h1>Logged Out Successfully</h1>
          <p>You have been successfully logged out of the two-factor authentication software.</p>


          <button onClick={handleReturnToLogin}>Return to Login</button>
        </div>
      ) : (
        <div>
          <h1>Two-Factor Authentication Logout</h1>
          <p>Click the button below to log out:</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
    </>
  );
}

export default LogOutPage;
