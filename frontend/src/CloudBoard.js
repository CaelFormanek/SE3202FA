import './CloudBoard.css';
import welcome from './Images/welcome.png';
import logoutIcon from './Images/logout.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function CloudBoard() {

  const navigate = useNavigate();

    const handleLogout = () => {
      // You can add additional logic here before navigating to the logout page
      navigate('/logout');
    };
  return (
    <div className="CloudBoard">
      <div className='optionbar'>
      <span class="material-symbols-outlined md-60">menu</span>
      <span className='cloudservicesbar'>Cloud Services</span>
      <span className='contactteammember'>Contact Team Member</span>
      <span className='setupnetwork'>Set up Network</span>
      <span className='createdatabase'>Create Database</span>
      <button className="logout-button" onClick={handleLogout}>
      <img src={logoutIcon} alt="Logout" className="logout-icon" />
        </button>
      <span class="material-symbols-outlined md-48">help</span>
      </div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <img className="welcome" src={welcome}></img>

    </div>
  );
}

export default CloudBoard;
