import './EmailPass.css';
import cloudlogo from './Images/cloudlogo.png'
import React, { useState } from 'react';


function EmailPass() {
  const [username, setUsername] = useState('');
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

  const login = async (event) => {
    console.log("Clicked!")
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.status === 200) {
        // Login successful, navigate to a new webpage
        window.location.href = '/verificationmethod';
      } else {
        // Handle login error
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  return (
    <div className="EmailPass">
      <div className='contentdiv'>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <img className="cloudlogo" src={cloudlogo}></img>

      <div className="buttonsandinput">
        <small className="emailheader">CloudBoard Email</small>
        <input className="usernameinput" type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} placeholder="">
        </input>

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
        
        <a href='http://localhost:3000/verificationmethod'><button className="signinbutton" onClick={login}><span class="material-symbols-outlined arrow">arrow_forward</span></button></a>
      </div>
      </div>
    </div>
  );
}

export default EmailPass;
