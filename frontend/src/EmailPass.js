import './EmailPass.css';
import cloudlogo from './Images/cloudlogo.png'
import React, { useState } from 'react';


function EmailPass() {
  // https://www.geeksforgeeks.org/how-to-show-and-hide-password-in-reactjs/
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // https://legacy.reactjs.org/docs/lists-and-keys.html
  const iconslist = ['visibility', 'visibility_off'];
  const [index, setIndex] = useState(0);
  const [num, setNum] = useState(-1);

  // https://www.geeksforgeeks.org/how-to-show-and-hide-password-in-reactjs/
  const handleClick = () => {
    setShowPassword((prev) => !prev)
    setIndex((prev) => (prev + num*-1))
    setNum((prev) => (prev*-1))
  }
  
  return (
    <div className="EmailPass">
      <div className='contentdiv'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <img className="cloudlogo" src={cloudlogo}></img>

      <div className="buttonsandinput">
        <small className="emailheader">CloudBoard Email</small>
        <input className="usernameinput" type="text" placeholder=""></input>

        <small className="enterpasswordheader">CloudBoard Password</small>
        <div>
          {/* https://www.geeksforgeeks.org/how-to-show-and-hide-password-in-reactjs/ */}
          <input className="enterpasswordinput" type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder="">
          </input>
          {/* https://www.geeksforgeeks.org/how-to-show-and-hide-password-in-reactjs/ */}
          <button className="button1" onClick={handleClick}><span class="material-symbols-outlined">{iconslist[index]}</span></button>
        </div>
        
        <a href='http://localhost:3000/verificationmethod'><button className="signinbutton"><span class="material-symbols-outlined arrow">arrow_forward</span></button></a>
      </div>
      </div>
    </div>
  );
}

export default EmailPass;
