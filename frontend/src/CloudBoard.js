import './CloudBoard.css';
import welcome from './Images/welcome.png'
import React, { useState } from 'react';


function CloudBoard() {
  
  
  return (
    <div className="CloudBoard">
      <div className='optionbar'><span class="material-symbols-outlined md-60">menu</span><span className='cloudservicesbar'>Cloud Services</span> <span className='contactteammember'>Contact Team Member</span> <span className='setupnetwork'>Set up Network</span> <span className='createdatabase'>Create Database</span> <span class="material-symbols-outlined md-48">help</span></div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <img className="welcome" src={welcome}></img>

    </div>
  );
}

export default CloudBoard;
