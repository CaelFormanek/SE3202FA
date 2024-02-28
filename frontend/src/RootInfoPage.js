import './RootInfoPage.css';
import lock from './Images/lock.png'
import React, { useState } from 'react';


function RootInfoPage() {

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
    <div className="RootInfoPage">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <img className="logoimage" src={lock} ></img>

      <div className="buttonsandinput">
        <small className="usernameheader">Enter Root Username</small>
        <input className="usernameinput" type="text" placeholder=""></input>

        <small className="enterpasswordheader">Enter Root Password</small>
        <div>
          {/* https://www.geeksforgeeks.org/how-to-show-and-hide-password-in-reactjs/ */}
          <input className="enterpasswordinput" type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)} placeholder="">
          </input>
          {/* https://www.geeksforgeeks.org/how-to-show-and-hide-password-in-reactjs/ */}
          <button className="button1" onClick={handleClick}><span class="material-symbols-outlined">{iconslist[index]}</span></button>
        </div>
        

        <a href='http://localhost:3000/accountlinked'><button className="checkrootaccessbutton">Check Root Access</button></a>
        <button className="checkrootaccessbutton">Check Root Access</button>
      </div>
    </div>
  );
}

export default RootInfoPage;
