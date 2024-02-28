import './LogOutPage.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function LogOutPage() {
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () => {
    // add logic here for two-factor authentication system
    setIsLoggedOut(true);
  };

  const handleReturnToLogin = () => {
    // You can add additional logic here before navigating back to the login page
    navigate('/rootinfo');
  };

  const handleBackButton = () => {
   // You can add additional logic here before navigating back
   navigate(-1); // Go back one step in the history
 };

  return (
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
          <button onClick={handleBackButton}>Back</button>
        </div>
      )}
    </div>
  );
}

export default LogOutPage;
