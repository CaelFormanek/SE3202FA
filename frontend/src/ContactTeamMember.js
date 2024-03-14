import './CloudBoard.css';
import './ContactTeamMember.css';
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


function ContactTeamMemberPage() {

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    // You can add additional logic here before navigating to the logout page
    navigate('/logout');
  };

  const handleMenuClick = () => {
  setIsMenuOpen(!isMenuOpen);
};
  const showContactInfo = false;
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
    <div className="centered-container">
    <div>
      <h2>Contact A Team Member</h2>

      <section>
        <h3>Reach us at: </h3>
        <p> Email: fakeCompanyEmail@cloudboard.com</p>
        <p>  Phone: 246-810-1214</p>

          <p>Please allow us 2-3 business days to anwer any questions. </p>
          <p>Please check our FAQ section below to see if any questions can be answered there.</p>

      </section>
      <section id="faq">
        <h3>FAQ </h3>
        <p>
        FAQ

        </p>
      </section>
    </div>
    </div>
    </>
  );
}

export default ContactTeamMemberPage;
