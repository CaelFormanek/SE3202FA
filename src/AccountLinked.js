import './AccountLinked.css';
import React, { useState } from 'react';
import checkmark from './Images/checkmark.png'

function AccountLinked() {


  return (
    <div className="AccountLinked">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <img className="checkmark" src={checkmark}></img>
      <div className='messages'>
        <div className='message1'>Your account is linked!</div>
        <div className='message2'>A secret key file on your system has been created.</div>
        <div className='message3'>You will be redirected to provide root information to confirm your linkage.</div>
        <div className='message4'>This is a one time process, and you will only be asked one time once your account linkage is confirmed.</div>
        <a href='http://localhost:3000/fakerootinfo'><button className='redirecting'>Confirm Linkage</button></a>
      </div>
    </div>
  );
}

export default AccountLinked;
