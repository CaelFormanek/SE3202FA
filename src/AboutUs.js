import './CloudBoard.css';
import './AboutUs.css';
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


function AboutUsPage() {

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    // You can add additional logic here before navigating to the logout page
    navigate('/logout');
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

    <div>
    <div className="centered-container">
      <h2>About Us</h2>
      <section>
        <h3>Mission Statement</h3>
        <p>
          Our mission is to provide secure and user-friendly authentication solutions, empowering individuals and organizations to protect their digital assets with confidence.
        </p>
      </section>
      <section>
        <h3>How We Differ</h3>
        <p>
          Our two-factor authentication (2FA) solution stands out from the rest by prioritizing simplicity without compromising security. We leverage cutting-edge technologies to deliver a seamless and robust authentication experience, setting us apart from traditional 2FA methods.
        </p>
      </section>
    </div>
    </div>
    </>
  );
}

export default AboutUsPage;
