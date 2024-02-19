import './LandingPage.css';
import register from './Images/Register.png'
import React, { useState } from 'react';


function LandingPage() {

  return (
    <div className="LandingPage">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <img className="logoimage" src={register} ></img>

      <div className="buttonsandinput">
        <small className="emailheader">Email</small>
        <input className="emailinput" type="text" placeholder=""></input>

        <small className="createpasswordheader">Create Password</small>
        <div>
          <input className="createpasswordinput" type="text" placeholder=""></input>
          <button className="button1"><span class="material-symbols-outlined">visibility_off</span></button>
        </div>
        
        <small className="confirmpasswordheader">Confirm Password</small>
        <div>
          <input className="confirmpasswordinput" type="text" placeholder=""></input>
          <button className="button2"><span class="material-symbols-outlined">visibility_off</span></button>
        </div>

        <button className="registerbutton">Register</button>
      </div>
    </div>
  );
}

export default LandingPage;
